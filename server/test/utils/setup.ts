import { openDBConnection } from "../../src/utils/database";
import clientsData from "../data/clients";
import productsData from "../data/products";
import { Client } from "../../src/entities/Client";
import { Product } from "../../src/entities/Product";
import { Purchase } from "../../src/entities/Purchase";

interface PurchasesData {
  client: Client;
  product: Product;
  quantity: number;
}

openDBConnection(true)
  .then(async () => {
    // set up the data base for the test
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
    await Purchase.save(purchases);

    process.exit();
  })
  .catch((err) => console.log(err));
