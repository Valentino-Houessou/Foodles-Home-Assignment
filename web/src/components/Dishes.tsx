import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useAvailableProductQuery } from "../generated/graphql";
import { CartStatus } from "../utils/types";
import { Dish } from "./Dish";
import {
  useIsProcessed,
  useSetIsProcessed,
} from "./providers/isProcessedProvider";

interface DishesProps {}

export const Dishes: React.FC<DishesProps> = ({}) => {
  const [{ data, fetching }, reexecuteQuery] = useAvailableProductQuery();
  const isProcessed = useIsProcessed();
  const setIsProcessed = useSetIsProcessed()!;

  useEffect(() => {
    // refresh the dish list when the cart is processed
    if (isProcessed === CartStatus.PROCESSED_CART) {
      reexecuteQuery({ requestPolicy: "network-only" });
      setIsProcessed(CartStatus.UPDATED_DISHES);
    }
  }, [isProcessed, setIsProcessed]);

  return (
    <Box>
      {fetching ? (
        <Text>Fetching</Text>
      ) : (
        <Flex>
          {data?.availableProducts?.map((product, index) => (
            <Dish key={index} product={product} />
          ))}
        </Flex>
      )}
    </Box>
  );
};
