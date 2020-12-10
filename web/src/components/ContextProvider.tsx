import React from "react";
import { CartProvider } from "./CartProvider";
import { UserProvider } from "./UserProvider";

interface ContextProviderProps {}

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  return (
    <CartProvider>
      <UserProvider>{children}</UserProvider>
    </CartProvider>
  );
};
