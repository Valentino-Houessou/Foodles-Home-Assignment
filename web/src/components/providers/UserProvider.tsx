import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

const UserContext = createContext({});
const SetUserContext = createContext<Dispatch<SetStateAction<{}>> | undefined>(
  undefined
);

interface UserProviderProps {}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState({});

  return (
    <SetUserContext.Provider value={setUser}>
      <UserContext.Provider value={user}>{children}</UserContext.Provider>
    </SetUserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
export const useSetUser = () => useContext(SetUserContext);
