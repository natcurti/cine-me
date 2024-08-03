/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState } from "react";
import { IUser } from "src/interfaces/IUser";

const initialValues = {
  name: "",
  lastname: "",
  email: "",
  password: "",
  passwordRepeat: "",
};

export interface IUserContext {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
}

export const UserContext = createContext({
  user: initialValues,
  setUser: (_values: IUser) => {},
});

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState(initialValues);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
