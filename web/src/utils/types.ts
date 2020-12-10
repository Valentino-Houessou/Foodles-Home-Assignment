import { Product } from "../generated/graphql";

export type DishType = Pick<
  Product,
  "id" | "name" | "price" | "quantity" | "pictureUrl"
>;
