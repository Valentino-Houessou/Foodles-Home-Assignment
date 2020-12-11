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
  CLEAR = "REMOVE_ALL",
}

export interface Action {
  type: CartDispatchType;
  payload?: ItemData;
}

export interface CustomIconButtonType {
  handleClick: (_: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  bgColor: string;
  ariaLabel: string;
  icon: IconType;
  iconColor: string;
  isDisable?: boolean;
}

export interface User {
  id: number;
  info: string;
}

export enum CartStatus {
  WILL_PROCESS = "WILL PROCESS",
  PROCESSED_CART = "PROCESSED",
  UPDATED_DISHES = "UPDATED_DISHES",
}

export interface SelectOption {
  value: number;
  label: string;
}
