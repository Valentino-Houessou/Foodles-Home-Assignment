import { MoreThan } from "typeorm";
import { Product } from "../src/entities/Product";
import { closeDBConnection, openDBConnection } from "../src/utils/database";
import products from "./data/products";
import { graphQLFunc } from "./utils/graphQLFunc";

beforeAll(async () => {
  await openDBConnection();
});
afterAll(async () => {
  await closeDBConnection();
});

const data = products[2];

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

describe("product entity created", () => {
  it("should find a product entity", async () => {
    const product = await Product.findOne({ name: data.name });

    expect(product?.name).toBe(data.name);
    expect(product?.price).toBe(data.price.toString());
    expect(product?.quantity).toBe(data.quantity);
    expect(product?.pictureUrl).toBe(data.pictureUrl);
  });
});

describe("Get available product", () => {
  it("should return the 2 availables products", async () => {
    const products = await Product.find({ where: { quantity: MoreThan(0) } });

    const response = await graphQLFunc({
      source: getProductsQuery,
    });

    expect(response.data?.availableProducts.length).toBe(products.length);
  });
});
