import { formatPrice } from "../src/utils/formatPrice";

describe("format price", () => {
  it("should return well formatted french currency price", () => {
    expect(formatPrice(10.6452)).toBe("10,65 €");
  });
});
