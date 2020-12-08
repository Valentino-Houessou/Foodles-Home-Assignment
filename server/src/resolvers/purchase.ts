import { Arg, Mutation, Resolver } from "type-graphql";
import { Client } from "../entities/Client";
import { Product } from "../entities/Product";
import { Purchase } from "../entities/Purchase";
import { PurchaseInput } from "./purchaseInput";

@Resolver()
export class PurchaseResolver {
  @Mutation(() => Boolean)
  async processPurchase(
    @Arg("input") input: PurchaseInput,
  ): Promise<boolean | undefined> {
    const { clientId, productsQuantities } = input;

    const client = await Client.findOne(clientId);

    if (!client) {
      return false;
    }

    const credit = client.credit;
    let cost = 0;

    for (let index = 0; index < productsQuantities.length; index += 1) {
      const { productId, quantity: purchasedQuantity } = productsQuantities[
        index
      ];

      const purchase = await Purchase.create({
        clientId,
        productId,
        quantity: purchasedQuantity,
      });
      const product = await Product.findOne(productId);

      let price = 0,
        productQuantity = 0;

      purchase.client = client;

      if (product) {
        purchase.product = product;
        price = product.price;
        productQuantity = product.quantity;
      }
      purchase.save();

      cost = cost + purchasedQuantity * price;

      await Product.update(
        { id: productId },
        {
          quantity: productQuantity - purchasedQuantity,
        },
      );
    }

    await Client.update({ id: clientId }, { credit: credit - cost });

    return true;
  }
}
