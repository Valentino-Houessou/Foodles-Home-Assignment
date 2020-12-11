import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

const IsProcessedContext = createContext<boolean>(false);
const SetIsProcessedContext = createContext<
  Dispatch<SetStateAction<boolean>> | undefined
>(undefined);

interface IsProcessedProviderProps {}

export const IsProcessedProvider: React.FC<IsProcessedProviderProps> = ({
  children,
}) => {
  const [isProcessed, setIsProcessed] = useState(false);

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
