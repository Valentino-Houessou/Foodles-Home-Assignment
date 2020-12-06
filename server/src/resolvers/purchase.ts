import { Arg, Mutation, Resolver } from "type-graphql";
import { Client } from "../entities/Client";
import { Product } from "../entities/Product";
import { Purchase } from "../entities/Purchase";
import { PurchaseInput } from "./purchaseInput";

@Resolver()
export class PurchaseResolver {
  @Mutation(() => Purchase, { nullable: true })
  async processPurchase(
    @Arg("input") input: PurchaseInput,
  ): Promise<Purchase | undefined> {
    const purchase = await Purchase.create(input);
    const client = await Client.findOne(input.clientId);
    const product = await Product.findOne(input.productId);

    let price = 0,
      productQuantity = 0,
      credit = 0;
    const purchaseQuantity = input.quantity;

    if (client) {
      purchase.client = client;
      credit = client.credit;
    }
    if (product) {
      purchase.product = product;
      price = product.price;
      productQuantity = product.quantity;
    }
    purchase.save();

    const cost = purchaseQuantity * price;

    await Client.update({ id: input.clientId }, { credit: credit - cost });

    await Product.update(
      { id: input.productId },
      {
        quantity: productQuantity - purchaseQuantity,
      },
    );

    return purchase;
  }
}
