import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useAvailableProductQuery } from "../generated/graphql";
import { Dish } from "./Dish";

interface DishesProps {}

export const Dishes: React.FC<DishesProps> = ({}) => {
  const [{ data, fetching }] = useAvailableProductQuery();

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
