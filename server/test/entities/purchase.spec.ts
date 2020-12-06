import { Purchase } from "../../src/entities/Purchase";
import { closeDBConnection, openDBConnection } from "../../src/utils/database";

beforeAll(async () => {
  await openDBConnection();
});
afterAll(async () => {
  await closeDBConnection();
});

describe("purchases created", () => {
  it("should find created purchases", async () => {
    expect(await Purchase.count()).toBe(18);
  });
});
