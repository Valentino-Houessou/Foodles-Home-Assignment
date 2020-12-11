import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { User } from "../../utils/types";

const UserContext = createContext<User | undefined>(undefined);
const SetUserContext = createContext<
  Dispatch<SetStateAction<User>> | undefined
>(undefined);

interface UserProviderProps {}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState({} as User);

  return (
    <SetUserContext.Provider value={setUser}>
      <UserContext.Provider value={user}>{children}</UserContext.Provider>
    </SetUserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
export const useSetUser = () => useContext(SetUserContext);
