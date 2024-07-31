/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState } from "react";
import { http_auth } from "src/http/http-auth";

export const SessionContext = createContext({
  isLoggedIn: false,
  login: (_email: string, _password: string) => {},
});

export const SessionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (email: string, password: string) => {
    http_auth
      .post("/auth", {
        email,
        password,
      })
      .then((response) => console.log(response))
      .then(() => setIsLoggedIn(true))
      .catch((err) => console.log(err));
  };

  return (
    <SessionContext.Provider value={{ isLoggedIn, login }}>
      {children}
    </SessionContext.Provider>
  );
};
