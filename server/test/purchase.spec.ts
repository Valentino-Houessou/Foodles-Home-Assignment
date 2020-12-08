import { Purchase } from "../src/entities/Purchase";
import { closeDBConnection, openDBConnection } from "../src/utils/database";
import { graphQLFunc } from "./utils/graphQLFunc";
import { PurchaseInput, ProductQuantity } from "../src/resolvers/purchaseInput";
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
  processPurchase(input: $input)
}

`;

describe("purchases created", () => {
  it("should find created purchases", async () => {
    expect(await Purchase.count()).toBeGreaterThan(0);
  });
});

describe("purchase with wrong client id", () => {
  it("should return false", async () => {
    const input: PurchaseInput = {
      clientId: 0,
      productsQuantities: [{ productId: 1, quantity: 1 }],
    };

    const response = await graphQLFunc({
      source: purchaseMutation,
      variableValues: { input },
    });

    expect(response.data?.processPurchase).toBeFalsy();
  });
});

describe("purchase proceed well", () => {
  it("should save the purchase and update client credit and product quantity", async () => {
    const clientId = 3;

    const prevClient = await Client.findOne(clientId);
    const productsId = [1, 2];
    const prevProducts = await Promise.all(
      productsId.map(async (productId) => await Product.findOne(productId)),
    );

    const purchasedQuanties = [1, 2];
    const productsQuantities = prevProducts.map(
      (product, index) =>
        ({
          productId: product?.id,
          quantity: purchasedQuanties[index],
        } as ProductQuantity),
    );

    const input: PurchaseInput = {
      clientId,
      productsQuantities,
    };

    const response = await graphQLFunc({
      source: purchaseMutation,
      variableValues: { input },
    });

    const currentClient = await Client.findOne(clientId);
    const currentProducts = await Promise.all(
      [1, 2].map(async (productId) => await Product.findOne(productId)),
    );

    const currentCredit = currentClient?.credit;

    const cost = currentProducts.reduce(
      (acc, product, index) =>
        acc + (product?.price || 0) * purchasedQuanties[index],
      0,
    );
    const prevCredit = prevClient?.credit || 0;

    expect(response.data?.processPurchase).toBeTruthy();
    expect(currentCredit).toBe((prevCredit - cost).toString());

    currentProducts.forEach((product, index) => {
      const prevProductQuantity = prevProducts[index]?.quantity || 0,
        purchasedQuantity = purchasedQuanties[index] || 0;
      const currentQuantity = prevProductQuantity - purchasedQuantity;

      expect(product?.quantity).toBe(currentQuantity);
      expect(currentQuantity).toBeGreaterThanOrEqual(0);
    });
  });
});
