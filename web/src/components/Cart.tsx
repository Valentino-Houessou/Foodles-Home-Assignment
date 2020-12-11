import { Button, Icon, Text } from "@chakra-ui/react";
import React, { Fragment } from "react";
import { BiBasket } from "react-icons/bi";
import {
  PurchaseInput,
  useProcessPurchaseMutation,
} from "../generated/graphql";
import { formatPrice } from "../utils/formatPrice";
import { mapCartToPurchases } from "../utils/mapCartToPurchases";
import { CartDispatchType, ItemData } from "../utils/types";
import { useCart, useCartDispatch } from "./providers/CartProvider";
import { useUser } from "./providers/UserProvider";
import { useSetIsProcessed } from "./providers/isProcessedProvider";

interface CartProps {}

export const Cart: React.FC<CartProps> = ({}) => {
  const cart = useCart();
  const user = useUser()!;
  const cartDispatch = useCartDispatch()!;
  const [{}, processPurchase] = useProcessPurchaseMutation();
  const setIsProcessed = useSetIsProcessed()!;

  const total = () =>
    [...cart.entries()].reduce((acc: number, item: [number, ItemData]) => {
      let price = item[1]?.price || 0,
        quantity = item[1]?.quantity || 0;

      return acc + price * quantity;
    }, 0);

  const handleClick = async (
    _: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const purchases: PurchaseInput = {
      clientId: user.id,
      productsQuantities: mapCartToPurchases([...cart.values()]),
    };

    await processPurchase({ input: purchases });
    cartDispatch({
      type: CartDispatchType.CLEAR,
    });
    setIsProcessed(true);
  };

  return (
    <Fragment>
      {cart.size > 0 && (
        <Button
          leftIcon={<Icon w={5} h={5} color="#006664" as={BiBasket} />}
          bg="powderBlue"
          borderRadius={4}
          variant="solid"
          onClick={async (event) => {
            await handleClick(event);
          }}
        >
          <Text color="#006664" fontSize="0.8em">
            {formatPrice(total())}
          </Text>
        </Button>
      )}
    </Fragment>
  );
};
