import { ProductQuantity } from "../generated/graphql";
import { ItemData } from "./types";

export const mapCartToPurchases = (items: ItemData[]): ProductQuantity[] => {
  return items.map(({ id, quantity }) => ({
    productId: id,
    quantity: quantity ? quantity : 0,
  }));
};
