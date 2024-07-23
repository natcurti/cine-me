import logo from "/logo-cine-me.png";
import { LogoImageStyled, LogoContainerStyled } from "./styled";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <LogoContainerStyled>
        <LogoImageStyled
          src={logo}
          alt="Logo Cine.me, com símbolo de play a esquerda e nome da marca a direita."
        />
      </LogoContainerStyled>
    </Link>
  );
};

export default Logo;
