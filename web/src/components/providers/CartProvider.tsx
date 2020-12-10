import React, { createContext, Dispatch, useContext, useReducer } from "react";
import { Action, CartDispatchType, ItemData } from "../../utils/types";

const CartStateContext = createContext(new Map<number, ItemData>());
const CartDispatchContext = createContext<Dispatch<Action> | undefined>(
  undefined
);

const reducer = (state: Map<number, ItemData>, action: Action) => {
  const { id } = action.payload;
  const item = state.get(id);

  switch (action.type) {
    case CartDispatchType.ADD:
      return state.set(id, action.payload);
    case CartDispatchType.INCREASE:
      if (item && item.quantity) {
        item.quantity += 1;
        state.set(id, item);
      }
      return state;
    case CartDispatchType.DECREASE:
      if (item && item.quantity && item.quantity > 1) {
        item.quantity -= 1;
        state.set(id, item);
      } else {
        state.delete(id);
      }
      return state;
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

interface CartProviderProps {}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, new Map<number, ItemData>());

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
export const useCartDispatch = () => useContext(CartDispatchContext);
