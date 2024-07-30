import { useNavigate } from "react-router-dom";
import Button from "../Button";
import Logo from "../Logo";
import Search from "../Search";
import MenuItems from "./MenuItems";
import { ContainerSearch, NavBarStyled, ContainerItems } from "./styled";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <NavBarStyled>
      <ContainerItems>
        <Logo />
        <MenuItems />
      </ContainerItems>
      <ContainerSearch>
        <Search />
        <Button size="sm" onClick={() => navigate("/login")}>
          Entrar
        </Button>
      </ContainerSearch>
    </NavBarStyled>
  );
};

export default NavBar;
