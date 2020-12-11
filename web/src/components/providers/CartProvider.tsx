import React, { createContext, Dispatch, useContext, useReducer } from "react";
import { Action, CartDispatchType, ItemData } from "../../utils/types";

export const CartStateContext = createContext(new Map<number, ItemData>());
const CartDispatchContext = createContext<Dispatch<Action> | undefined>(
  undefined
);

const reducer = (state: Map<number, ItemData>, action: Action) => {
  let id, item;
  if (action.payload) {
    id = action.payload.id;
    item = state.get(id);
  }

  switch (action.type) {
    case CartDispatchType.ADD:
      if (id && action.payload) {
        state.set(id, action.payload);
      }
      return new Map([...state]);
    case CartDispatchType.INCREASE:
      if (id && item && item.quantity) {
        item.quantity += 1;
        state.set(id, item);
      }
      return new Map([...state]);
    case CartDispatchType.DECREASE:
      if (id && item && item.quantity && item.quantity > 1) {
        item.quantity -= 1;
        state.set(id, item);
      } else if (id) {
        state.delete(id);
      }
      return new Map([...state]);
    case CartDispatchType.CLEAR:
      return new Map<number, ItemData>();
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
