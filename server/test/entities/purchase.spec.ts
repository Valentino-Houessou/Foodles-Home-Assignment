import { Client } from "../../src/entities/Client";
import { Product } from "../../src/entities/Product";
import { closeDBConnection, openDBConnection } from "../../src/utils/database";
import clientsData from "../data/clients";
import productsData from "../data/products";
import { Purchase } from "../../src/entities/Purchase";

beforeAll(async () => {
  await openDBConnection();
});
afterAll(async () => {
  await closeDBConnection();
});

interface PurchasesData {
  client: Client;
  product: Product;
  quantity: number;
}

describe("purchase creation", () => {
  it("should create a purchase entity", async () => {
    const clients = await Client.create(clientsData);
    await Client.save(clients);
    const products = await Product.create(productsData);
    await Product.save(products);

    const purchaseData: PurchasesData[] = [];

    clients.forEach((client, c_idx) => {
      products.forEach((product, p_idx) => {
        const purchase = { client, product, quantity: c_idx + p_idx + 1 };
        purchaseData.push(purchase);
      });
    });

    const purchases = await Purchase.create(purchaseData);
    const savedPurchases = await Purchase.save(purchases);

    console.log(savedPurchases);
    expect(savedPurchases.length).toBe(4);
  });
});
