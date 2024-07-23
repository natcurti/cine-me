import logo from "/logo-cine-me.png";
import { LogoImageStyled, TitleStyled } from "./styled";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <TitleStyled>
        <LogoImageStyled
          src={logo}
          alt="Logo Cine.me, com símbolo de play a esquerda e nome da marca a direita."
        />
      </TitleStyled>
    </Link>
  );
};

export default Logo;
