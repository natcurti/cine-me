import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "src/components/Footer";
import NavBar from "src/components/NavBar";
import { useSessionContext, useUserContext } from "src/hooks/custom";
import { http_auth } from "src/http/http-auth";
import { StoreToken } from "src/utils/StoreToken";

const DefaultPage = () => {
  const { setIsLoggedIn } = useSessionContext();
  const { setUser } = useUserContext();

  useEffect(() => {
    const token = StoreToken.getToken();
    if (token) {
      http_auth
        .get("/users")
        .then((response) =>
          setUser({
            name: response.data.name,
            lastname: "",
            email: "",
            password: "",
            passwordRepeat: "",
          })
        )
        .then(() => setIsLoggedIn(true))
        .catch(() => setIsLoggedIn(false));
    }
  }, [setIsLoggedIn, setUser]);

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default DefaultPage;
