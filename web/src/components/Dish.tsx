import { Box, Flex, Icon, IconButton, Img, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { BiDownload, BiMinus, BiPlus } from "react-icons/bi";
import { CartDispatchType, DishType } from "../utils/types";
import { useCart, useCartDispatch } from "./CartProvider";
import { useUser } from "./UserProvider";

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
  const inCart = () => cart.has(id);
  const addToCart = (_: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setDishQuantity(dishQuantity - 1);
    cartDispatch({
      type: CartDispatchType.ADD,
      payload: { id, price, quantity: 1 },
    });
  };

  console.log(cart);
  console.log(inCart());

  return (
    <Box width="13em" borderRadius="lg" overflow="hidden">
      <Box className="container">
        <Img src={pictureUrl} alt={name} className="image" width="100%" />
        <Box className={`overlay ${inCart() && "incart"}`}>
          {inCart() ? cart.get(id)?.quantity : ""}
        </Box>
      </Box>
      <Box p="5" bg="white">
        <Box
          mt={1}
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={2}
        >
          {name}
        </Box>
        <Box
          color="#828286"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="0.9em"
        >
          {new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "EUR",
          }).format(price)}
        </Box>
        <Flex justify="flex-end">
          {inCart() ? (
            <Flex>
              <Box mr="2">
                <IconButton
                  bg="fairPink"
                  minW={7}
                  h={7}
                  borderRadius={4}
                  _hover={{ opacity: "0.5" }}
                  aria-label="retrieve from cart"
                  icon={<Icon w={5} h={5} color="#ff9699" as={BiMinus} />}
                />
              </Box>

              <IconButton
                bg="powderBlue"
                minW={7}
                h={7}
                borderRadius={4}
                _hover={{ opacity: "0.5" }}
                aria-label="Add to cart"
                icon={<Icon w={5} h={5} color="#016765" as={BiPlus} />}
              />
            </Flex>
          ) : (
            <IconButton
              bg="powderBlue"
              minW={7}
              h={7}
              borderRadius={4}
              _hover={{ opacity: "0.5" }}
              aria-label="Add to cart"
              isDisabled={!connected()}
              onClick={addToCart}
              icon={<Icon w={5} h={5} color="#016765" as={BiDownload} />}
            />
          )}
        </Flex>
      </Box>
    </Box>
  );
};
