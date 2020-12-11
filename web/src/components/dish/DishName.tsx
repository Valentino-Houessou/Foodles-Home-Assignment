import { Box } from "@chakra-ui/react";
import React from "react";

interface DishNameProps {
  name: string;
}

export const DishName: React.FC<DishNameProps> = ({ name }) => {
  return (
    <Box mt={1} fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={2}>
      {name}
    </Box>
  );
};
