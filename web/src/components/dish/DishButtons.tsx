import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { BiDownload, BiMinus, BiPlus } from "react-icons/bi";
import { Product } from "../../generated/graphql";
import { CartDispatchType } from "../../utils/types";
import { CustomIconButton } from "../CustomIconButton";
import { useCart, useCartDispatch } from "../providers/CartProvider";
import { useUser } from "../providers/UserProvider";

interface DishButtonsProps {
  dish: Pick<Product, "id" | "quantity" | "price">;
}

export const DishButtons: React.FC<DishButtonsProps> = ({ dish }) => {
  const { id, quantity, price } = dish;
  const user = useUser()!;
  const cart = useCart();
  const inCart = () => cart.has(id);
  const [dishQuantity, setDishQuantity] = useState(quantity);
  const cartDispatch = useCartDispatch()!;

  const available = () => dishQuantity > 0;
  const connected = () => user.hasOwnProperty("id");

  const decreaseFromCart = (
    _: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setDishQuantity(dishQuantity + 1);
    cartDispatch({
      type: CartDispatchType.DECREASE,
      payload: { id },
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

  const addToCart = (_: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setDishQuantity(dishQuantity - 1);
    cartDispatch({
      type: CartDispatchType.ADD,
      payload: { id, price, quantity: 1 },
    });
  };

  return (
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
  );
};
