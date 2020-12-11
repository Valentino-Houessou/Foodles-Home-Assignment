import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { CartStatus } from "../../utils/types";

const IsProcessedContext = createContext<CartStatus>(CartStatus.WILL_PROCESS);
const SetIsProcessedContext = createContext<
  Dispatch<SetStateAction<CartStatus>> | undefined
>(undefined);

interface IsProcessedProviderProps {}

export const IsProcessedProvider: React.FC<IsProcessedProviderProps> = ({
  children,
}) => {
  const [isProcessed, setIsProcessed] = useState(CartStatus.WILL_PROCESS);

  return (
    <SetIsProcessedContext.Provider value={setIsProcessed}>
      <IsProcessedContext.Provider value={isProcessed}>
        {children}
      </IsProcessedContext.Provider>
    </SetIsProcessedContext.Provider>
  );
};

export const useIsProcessed = () => useContext(IsProcessedContext);
export const useSetIsProcessed = () => useContext(SetIsProcessedContext);
