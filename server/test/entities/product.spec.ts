import { closeDBConnection, openDBConnection } from "../../src/utils/database";
import config from "../../config/common";
import { Product } from "../../src/entities/Product";

beforeAll(async () => {
  await openDBConnection();
});
afterAll(async () => {
  await closeDBConnection();
});

const data = {
  name: "Aiguillettes de poulet au miel et nouilles soba aux légumes",
  price: 4.9,
  quantity: 10,
  pictureUrl: `${config.backend_url}images/Aiguillettes_de_poulet_au_miel_et_nouilles_soba_aux_legumes.jpg`,
};

describe("product entity creation", () => {
  it("should create a product entity", async () => {
    const product = await Product.create(data).save();

    expect(product.name).toBe(data.name);
    expect(product.price).toBe(data.price);
    expect(product.quantity).toBe(data.quantity);
    expect(product.pictureUrl).toBe(data.pictureUrl);
  });
});
