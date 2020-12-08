import { PurchaseInput } from "../src/resolvers/purchaseInput";
import { graphQLFunc } from "./utils/graphQLFunc";
import { Product } from "../src/entities/Product";
import { MoreThan } from "typeorm";
import { openDBConnection, closeDBConnection } from "../src/utils/database";

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

const getProductsQuery = `
query getAvailableProduct{
  availableProducts{
    id,
    name,
    price,
    quantity,
    pictureUrl
  }
}
`;

describe("User by the last available product, and that product isn't available anymore", () => {
  it("should proceed the purchase and return only on product", async () => {
    const clientId = 3,
      productId = 1,
      purchasedQuantity = 2;

    const input: PurchaseInput = {
      clientId,
      productsQuantities: [{ productId, quantity: purchasedQuantity }],
    };

    const purchaseResponse = await graphQLFunc({
      source: purchaseMutation,
      variableValues: { input },
    });

    expect(purchaseResponse.data?.processPurchase).toBeTruthy();

    const products = await Product.find({ where: { quantity: MoreThan(0) } });
    const productResponse = await graphQLFunc({
      source: getProductsQuery,
    });

    expect(productResponse.data?.availableProducts.length).toBe(
      products.length,
    );
  });
});
