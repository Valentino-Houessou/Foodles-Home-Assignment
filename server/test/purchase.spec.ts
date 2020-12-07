import { Purchase } from "../src/entities/Purchase";
import { closeDBConnection, openDBConnection } from "../src/utils/database";
import { graphQLFunc } from "./utils/graphQLFunc";
import { PurchaseInput } from "../src/resolvers/purchaseInput";
import { Client } from "../src/entities/Client";
import { Product } from "../src/entities/Product";

beforeAll(async () => {
  await openDBConnection();
});
afterAll(async () => {
  await closeDBConnection();
});

const purchaseMutation = `
mutation processPurchase($input: PurchaseInput!) {
  processPurchase(input: $input){
    id,
  }
}

`;

describe("purchases created", () => {
  it("should find created purchases", async () => {
    expect(await Purchase.count()).toBeGreaterThan(0);
  });
});

describe("purchase proceed well", () => {
  it("should save the purchase and update client credit and product quantity", async () => {
    const clientId = 3,
      productId = 2;
    const prevClient = await Client.findOne(clientId);
    const prevProduct = await Product.findOne(productId);

    const purchasedQuantity = 1,
      previousCredit = prevClient ? prevClient.credit : 0,
      previousQuantity = prevProduct ? prevProduct.quantity : 0;

    const input: PurchaseInput = {
      clientId,
      productId,
      quantity: purchasedQuantity,
    };

    const response = await graphQLFunc({
      source: purchaseMutation,
      variableValues: { input },
    });

    const currentClient = await Client.findOne(clientId);
    const currentProduct = await Product.findOne(productId);

    const currentCredit = currentClient ? currentClient.credit : 0;
    const currentQuantity = currentProduct ? currentProduct.quantity : 0;
    const currentPrice = currentProduct ? currentProduct.price : 0;

    const cost = currentPrice * purchasedQuantity;

    expect(response).toBeDefined();
    expect(currentCredit).toBe((previousCredit - cost).toString());
    expect(currentQuantity).toBe(previousQuantity - purchasedQuantity);
    expect(previousQuantity - purchasedQuantity).toBeGreaterThanOrEqual(0);
  });
});
