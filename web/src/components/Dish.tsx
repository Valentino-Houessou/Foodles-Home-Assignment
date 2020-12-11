import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { BiDownload, BiMinus, BiPlus } from "react-icons/bi";
import { CartDispatchType, DishType } from "../utils/types";
import { CustomIconButton } from "./CustomIconButton";
import { DishName } from "./dish/DishName";
import { DishPicture } from "./dish/DishPicture";
import { DishPrice } from "./dish/DishPrice";
import { useCart, useCartDispatch } from "./providers/CartProvider";
import { useUser } from "./providers/UserProvider";

interface DishProps {
  product: DishType;
}

export const Dish: React.FC<DishProps> = ({ product }) => {
  const { id, pictureUrl, name, price, quantity } = product;
  const user = useUser();
  const cart = useCart();
  const [dishQuantity, setDishQuantity] = useState(quantity);
  const cartDispatch = useCartDispatch()!;

  const connected = () => user.hasOwnProperty("value");
  const available = () => dishQuantity > 0;
  const inCart = () => cart.has(id);

  const addToCart = (_: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setDishQuantity(dishQuantity - 1);
    cartDispatch({
      type: CartDispatchType.ADD,
      payload: { id, price, quantity: 1 },
    });
  };

  const increaseIntoCart = (
    _: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setDishQuantity(dishQuantity - 1);
    cartDispatch({
      type: CartDispatchType.INCREASE,
      payload: { id },
    });
  };

  const decreaseFromCart = (
    _: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setDishQuantity(dishQuantity + 1);
    cartDispatch({
      type: CartDispatchType.DECREASE,
      payload: { id },
    });
  };

  return (
    <Box width="13em" borderRadius="lg" overflow="hidden" mr="1em">
      <DishPicture dish={{ id, pictureUrl, name }} />
      <Box p="5" bg="white">
        <DishName name={name} />
        <DishPrice price={price} />
        <Flex justify="flex-end">
          {inCart() ? (
            <Flex>
              <Box mr="2">
                <CustomIconButton
                  buttonIconData={{
                    bgColor: "fairPink",
                    ariaLabel: "retrieve from cart",
                    handleClick: decreaseFromCart,
                    iconColor: "#ff9699",
                    icon: BiMinus,
                  }}
                />
              </Box>

              <CustomIconButton
                buttonIconData={{
                  bgColor: "powderBlue",
                  ariaLabel: "Increase to cart",
                  handleClick: increaseIntoCart,
                  iconColor: "#016765",
                  icon: BiPlus,
                  isDisable: !available(),
                }}
              />
            </Flex>
          ) : (
            <CustomIconButton
              buttonIconData={{
                bgColor: "powderBlue",
                ariaLabel: "Add to cart",
                handleClick: addToCart,
                iconColor: "#016765",
                icon: BiDownload,
                isDisable: !connected(),
              }}
            />
          )}
        </Flex>
      </Box>
    </Box>
  );
};
