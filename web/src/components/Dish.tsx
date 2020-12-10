import { Box, Flex, IconButton, Icon, Image } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { BiMinus, BiPlus, BiDownload } from "react-icons/bi";
import { DishType } from "../utils/types";

interface DishProps {
  product: DishType;
}

export const Dish: React.FC<DishProps> = ({ product }) => {
  const [addToCart, setAddToCart] = useState(false);
  const { pictureUrl, name, price } = product;

  return (
    <Box width="13em" borderRadius="lg" overflow="hidden">
      <Image src={pictureUrl} alt={name} />
      <Box p="5" bg="white">
        <Box
          mt="1"
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
          textTransform="uppercase"
        >
          {new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "EUR",
          }).format(price)}
        </Box>
        <Flex justify="flex-end">
          {addToCart ? (
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
              icon={<Icon w={5} h={5} color="#016765" as={BiDownload} />}
            />
          )}
        </Flex>
      </Box>
    </Box>
  );
};
