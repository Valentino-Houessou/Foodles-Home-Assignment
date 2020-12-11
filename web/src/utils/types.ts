import { IconType } from "react-icons";
import { Product } from "../generated/graphql";

export type DishType = Pick<
  Product,
  "id" | "name" | "price" | "quantity" | "pictureUrl"
>;

export interface ItemData {
  id: number;
  price?: number;
  quantity?: number;
}

export enum CartDispatchType {
  ADD = "ADD_TO_CART",
  INCREASE = "INCREASE_QUANTITY",
  DECREASE = "DECREASE_QUANTITY",
}

export interface Action {
  type: CartDispatchType;
  payload: ItemData;
}

export interface CustomIconButtonType {
  handleClick: (_: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  bgColor: string;
  ariaLabel: string;
  icon: IconType;
  iconColor: string;
  isDisable?: boolean;
}
