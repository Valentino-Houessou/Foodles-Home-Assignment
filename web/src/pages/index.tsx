import { Box, Text } from "@chakra-ui/react";
import { NavBar } from "../components/NavBar";
import { useUser } from "../components/UserProvider";

const Index = () => {
  const user = useUser();

  console.log(user);

  return (
    <Box bg="#f0f2f2" position="fixed" top="0" bottom="0" right="0" left="0">
      <NavBar />
      <Box m={5}>
        <Text fontSize="1.6em" fontWeight="bold" my={14}>
          Livraison
        </Text>
        <Box>List of product</Box>
      </Box>
    </Box>
  );
};

export default Index;
