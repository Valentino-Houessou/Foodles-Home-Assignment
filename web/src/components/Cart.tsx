import { Button, Icon, Text } from "@chakra-ui/react";
import React, { Fragment } from "react";
import { BiBasket } from "react-icons/bi";
import { formatPrice } from "../utils/formatPrice";
import { ItemData } from "../utils/types";
import { useCart } from "./providers/CartProvider";

interface CartProps {}

export const Cart: React.FC<CartProps> = ({}) => {
  const cart = useCart();

  const total = () =>
    [...cart.entries()].reduce((acc: number, item: [number, ItemData]) => {
      let price = item[1]?.price || 0,
        quantity = item[1]?.quantity || 0;

      return acc + price * quantity;
    }, 0);
  return (
    <Fragment>
      {cart.size > 0 && (
        <Button
          leftIcon={<Icon w={5} h={5} color="#006664" as={BiBasket} />}
          bg="powderBlue"
          borderRadius={4}
          variant="solid"
        >
          <Text color="#006664" fontSize="0.8em">
            {formatPrice(total())}
          </Text>
        </Button>
      )}
    </Fragment>
  );
};
