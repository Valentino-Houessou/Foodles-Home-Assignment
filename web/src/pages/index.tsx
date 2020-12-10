import { Box, Text } from "@chakra-ui/react";
import { Dish } from "../components/Dish";
import { NavBar } from "../components/NavBar";
import { DishType } from "../utils/types";

const Index = () => {
  const product: DishType = {
    id: 1,
    pictureUrl:
      "http://localhost:4000/images/Aiguillettes_de_poulet_au_miel_et_nouilles_soba_aux_legumes.jpg",
    name: "Aiguillettes de poulet au miel et nouilles soba aux légumes",
    price: 4.9,
    quantity: 3,
  };

  return (
    <Box bg="#f0f2f2" position="fixed" top="0" bottom="0" right="0" left="0">
      <NavBar />
      <Box m={5}>
        <Text fontSize="2em" fontWeight="bold" my={14}>
          Livraison
        </Text>
        <Box>
          <Dish product={product} />
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
