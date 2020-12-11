import { Box } from "@chakra-ui/react";
import React from "react";
import { formatPrice } from "../../utils/formatPrice";

interface DishPriceProps {
  price: number;
}

export const DishPrice: React.FC<DishPriceProps> = ({ price }) => {
  return (
    <Box
      color="#828286"
      fontWeight="semibold"
      letterSpacing="wide"
      fontSize="0.9em"
    >
      {formatPrice(price)}
    </Box>
  );
};
