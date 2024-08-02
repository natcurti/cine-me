/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { http_auth } from "src/http/http-auth";
import { StoreToken } from "src/utils/StoreToken";

export interface ISessionContext {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  login: (_email: string, _password: string) => void;
  error: string;
}

export const SessionContext = createContext<ISessionContext>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  login: (_email: string, _password: string) => {},
  error: "",
});

export const SessionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = (email: string, password: string) => {
    http_auth
      .post("/auth", {
        email,
        password,
      })
      .then((response) => StoreToken.setToken(response.data.token))
      .then(() => setIsLoggedIn(true))
      .then(() => navigate("/"))
      .catch((err) => setError(err.response.data.message));
  };

  return (
    <SessionContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, login, error }}
    >
      {children}
    </SessionContext.Provider>
  );
};
