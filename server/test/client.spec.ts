import { closeDBConnection, openDBConnection } from "../src/utils/database";
import { Client } from "../src/entities/Client";
import clients from "./data/clients";
import { graphQLFunc } from "./utils/graphQLFunc";

beforeAll(async () => {
  await openDBConnection();
});
afterAll(async () => {
  await closeDBConnection();
});

const data = clients[0];

const searchQuery = `
query SearchClient($name: String!, $limit: Float){
  searchByName(name:$name, limit:$limit){
    id,
    name,
    email,
    credit
  }
}
`;

describe("client entity created", () => {
  it("should find a client entity", async () => {
    const client = await Client.findOne(data);

    expect(client?.name).toBe(data.name);
    expect(client?.email).toBe(data.email);
    expect(client?.credit).toBe(data.credit.toString());
  });
});

describe("search client by name", () => {
  it("should return an array with one element which name is odin", async () => {
    const client = clients.find((c) => c.name == "Odin");

    const response = await graphQLFunc({
      source: searchQuery,
      variableValues: { name: "Odin" },
    });

    expect(response).toMatchObject({ data: { searchByName: [client] } });
  });

  it("should return an array with 3 elements which name contains", async () => {
    const client = clients.filter((c) => /u/.test(c.name));

    const response = await graphQLFunc({
      source: searchQuery,
      variableValues: { name: "u" },
    });

    expect(response).toMatchObject({ data: { searchByName: client } });
  });

  it("should respect the given limit", async () => {
    const response = await graphQLFunc({
      source: searchQuery,
      variableValues: { name: "u", limit: 2 },
    });
    expect(response.data?.searchByName.length).toBe(2);
  });
});
