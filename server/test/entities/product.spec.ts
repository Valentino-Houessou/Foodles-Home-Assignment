import { Product } from "../../src/entities/Product";
import { closeDBConnection, openDBConnection } from "../../src/utils/database";
import products from "../data/products";

beforeAll(async () => {
  await openDBConnection();
});
afterAll(async () => {
  await closeDBConnection();
});

const data = products[0];

describe("product entity created", () => {
  it("should find a product entity", async () => {
    const product = await Product.findOne({ name: data.name });

    expect(product?.name).toBe(data.name);
    expect(product?.price).toBe(data.price.toString());
    expect(product?.quantity).toBe(data.quantity);
    expect(product?.pictureUrl).toBe(data.pictureUrl);
  });
});
