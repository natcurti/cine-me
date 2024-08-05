import { useNavigate } from "react-router-dom";
import Button from "../Button";
import Logo from "../Logo";
import MenuLoggedIn from "../MenuLoggedIn";
import Search from "../Search";
import MenuItems from "./MenuItems";
import { ContainerSearch, NavBarStyled, ContainerItems } from "./styled";
import { useSessionContext } from "src/hooks/custom";

const NavBar = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSessionContext();

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
