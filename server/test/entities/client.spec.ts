import { closeDBConnection, openDBConnection } from "../../src/utils/database";
import { Client } from "../../src/entities/Client";

beforeAll(async () => {
  await openDBConnection();
});
afterAll(async () => {
  await closeDBConnection();
});

const data = {
  name: "Hugo",
  email: "hugo@foodles.com",
  credit: 100,
};

const dataWithoutCredit = {
  name: "Hugo",
  email: "valer@foodles.com",
};

describe("client entity creation", () => {
  it("should create a client entity", async () => {
    const client = await Client.create(data).save();

    expect(client.name).toBe(data.name);
    expect(client.email).toBe(data.email);
    expect(client.credit).toBe(data.credit.toString());
  });

  it("should create a client entity with credit at 0", async () => {
    const client = await Client.create(dataWithoutCredit).save();

    expect(client.name).toBe(dataWithoutCredit.name);
    expect(client.email).toBe(dataWithoutCredit.email);
    expect(client.credit).toBe("0");
  });
});
