import { Box, Center, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import { Cart } from "./Cart";
import { SearchBar } from "./SearchBar";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <Flex bg="#64adab" p={2}>
      <Box width="30em">
        <SearchBar />
      </Box>
      <Spacer />
      <Center>
        <Cart />
      </Center>
    </Flex>
  );
};
