import { Box, Img } from "@chakra-ui/react";
import React from "react";
import { Product } from "../../generated/graphql";
import { useCart } from "../providers/CartProvider";

interface DishPictureProps {
  dish: Pick<Product, "id" | "pictureUrl" | "name">;
}

export const DishPicture: React.FC<DishPictureProps> = ({ dish }) => {
  const { id, pictureUrl, name } = dish;
  const cart = useCart();
  const inCart = () => cart.has(id);

  return (
    <Box className="container">
      <Img src={pictureUrl} alt={name} className="image" width="100%" />
      <Box className={`overlay ${inCart() && "incart"}`}>
        {inCart() ? cart.get(id)?.quantity : ""}
      </Box>
    </Box>
  );
};
