/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useEffect, useState } from "react";
import { http_auth } from "src/http/http-auth";

const initialValues = {
  name: "",
  lastname: "",
  email: "",
  password: "",
  passwordRepeat: "",
};

export const UserContext = createContext({
  user: initialValues,
  setName: (_name: string) => {},
  setLastname: (_lastname: string) => {},
  setEmail: (_email: string) => {},
  setPassword: (_password: string) => {},
  setPasswordRepeat: (_passwordRepeat: string) => {},
});

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState(initialValues);

  useEffect(() => {
    http_auth.get("/users").then((response) =>
      setUser((previous) => {
        return {
          ...previous,
          name: response.data.name,
        };
      })
    );
  }, []);

  const setName = (name: string) => {
    setUser((previous) => {
      return {
        ...previous,
        name,
      };
    });
  };

  const setLastname = (lastname: string) => {
    setUser((previous) => {
      return {
        ...previous,
        lastname,
      };
    });
  };

  const setEmail = (email: string) => {
    setUser((previous) => {
      return {
        ...previous,
        email,
      };
    });
  };

  const setPassword = (password: string) => {
    setUser((previous) => {
      return {
        ...previous,
        password,
      };
    });
  };

  const setPasswordRepeat = (passwordRepeat: string) => {
    setUser((previous) => {
      return {
        ...previous,
        passwordRepeat,
      };
    });
  };

  const context = {
    user,
    setName,
    setLastname,
    setEmail,
    setPassword,
    setPasswordRepeat,
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};
