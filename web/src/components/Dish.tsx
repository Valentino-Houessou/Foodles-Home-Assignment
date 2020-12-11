import { Box } from "@chakra-ui/react";
import React from "react";
import { DishType } from "../utils/types";
import { DishButtons } from "./dish/DishButtons";
import { DishName } from "./dish/DishName";
import { DishPicture } from "./dish/DishPicture";
import { DishPrice } from "./dish/DishPrice";

interface DishProps {
  product: DishType;
}

export const Dish: React.FC<DishProps> = ({ product }) => {
  const { name, price } = product;

  return (
    <Box width="13em" borderRadius="lg" overflow="hidden" mr="1em">
      <DishPicture dish={product} />
      <Box p="5" bg="white">
        <DishName name={name} />
        <DishPrice price={price} />
        <DishButtons dish={product} />
      </Box>
    </Box>
  );
};
