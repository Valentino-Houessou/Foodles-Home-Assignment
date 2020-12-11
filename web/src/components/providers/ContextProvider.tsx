import React from "react";
import { CartProvider } from "./CartProvider";
import { IsProcessedProvider } from "./isProcessedProvider";
import { UserProvider } from "./UserProvider";

interface ContextProviderProps {}

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  return (
    <IsProcessedProvider>
      <CartProvider>
        <UserProvider>{children}</UserProvider>
      </CartProvider>
    </IsProcessedProvider>
  );
};
