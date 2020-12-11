import { Box, Text } from "@chakra-ui/react";
import { Dishes } from "../components/Dishes";
import { NavBar } from "../components/NavBar";

const Index = () => {
  return (
    <Box bg="#f0f2f2" position="fixed" top="0" bottom="0" right="0" left="0">
      <NavBar />
      <Box m={5}>
        <Text fontSize="2em" fontWeight="bold" my={14}>
          Livraison
        </Text>
        <Dishes />
      </Box>
    </Box>
  );
};

export default Index;
