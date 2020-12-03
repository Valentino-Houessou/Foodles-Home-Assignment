import { runTest } from "../src";

describe("test", () => {
  const res: string = runTest();
  it("should work", () => {
    expect(res).toBe("test works");
  });
});
