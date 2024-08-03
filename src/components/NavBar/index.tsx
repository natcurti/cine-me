import { useNavigate } from "react-router-dom";
import Button from "../Button";
import Logo from "../Logo";
import MenuLoggedIn from "../MenuLoggedIn";
import Search from "../Search";
import MenuItems from "./MenuItems";
import { ContainerSearch, NavBarStyled, ContainerItems } from "./styled";
import { useSessionContext, useUserContext } from "src/hooks/custom";
import { useEffect } from "react";
import { http_auth } from "src/http/http-auth";
import { StoreToken } from "src/utils/StoreToken";

const NavBar = () => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useSessionContext();
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
    <NavBarStyled>
      <ContainerItems>
        <Logo />
        <MenuItems />
      </ContainerItems>
      <ContainerSearch>
        <Search />
        {!isLoggedIn && (
          <Button size="sm" onClick={() => navigate("/login")}>
            Entrar
          </Button>
        )}
        {isLoggedIn && <MenuLoggedIn />}
      </ContainerSearch>
    </NavBarStyled>
  );
};

export default NavBar;
