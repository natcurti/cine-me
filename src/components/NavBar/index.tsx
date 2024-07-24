import Button from "../Button";
import Logo from "../Logo";
import Search from "../Search";
import MenuItems from "./MenuItems";
import { ContainerSearch, NavBarStyled, ContainerItems } from "./styled";

const NavBar = () => {
  return (
    <NavBarStyled>
      <ContainerItems>
        <Logo />
        <MenuItems />
      </ContainerItems>
      <ContainerSearch>
        <Search />
        <Button size="sm">Entrar</Button>
      </ContainerSearch>
    </NavBarStyled>
  );
};

export default NavBar;
