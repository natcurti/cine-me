import Button from "../Button";
import Logo from "../Logo";
import Search from "../Search";
import { ContainerStyled, NavBarStyled } from "./styled";

const NavBar = () => {
  return (
    <NavBarStyled>
      <Logo />
      <ContainerStyled>
        <Search />
        <Button>Entrar</Button>
      </ContainerStyled>
    </NavBarStyled>
  );
};

export default NavBar;
