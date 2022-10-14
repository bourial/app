import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';
import { IUser } from './modal';

type UsersContextType = {
  users: IUser[] | null;
  setUsers: Dispatch<SetStateAction<IUser[] | null>>;
};

type UsersContextProviderProps = {
  children: ReactNode;
};

export const UsersContext = createContext({} as UsersContextType);

export const UsersProvider = ({ children }: UsersContextProviderProps) => {
  const [users, setUsers] = useState<IUser[] | null>(null);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};
