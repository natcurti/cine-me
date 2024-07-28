import { Link } from "react-router-dom";
import Typography from "../Typography";
import { ContainerLinks, ContainerLogo, FooterStyled, LogoImg } from "./styled";
import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa";

const Footer = () => {
  const iconProps = {
    size: "25",
  };

  return (
    <FooterStyled>
      <ContainerLinks>
        <button>
          <FaYoutube {...iconProps} />
        </button>
        <button>
          <FaFacebookF {...iconProps} />
        </button>
        <button>
          <FaInstagram {...iconProps} />
        </button>
        <button>
          <FaTiktok {...iconProps} />
        </button>
      </ContainerLinks>
      <ContainerLogo>
        <LogoImg src="/logo-cine-me.png" alt="Logo Cine.me" />
        <Typography element="p1" variant="p">
          &#169; {new Date().getFullYear()} Desenvolvido por Natália Curti
        </Typography>
      </ContainerLogo>
      <ContainerLinks>
        <Link to="/">
          <Typography element="p1" variant="p">
            Política de Privacidade
          </Typography>
        </Link>
        <Link to="/">
          <Typography element="p1" variant="p">
            Gerir Cookies
          </Typography>
        </Link>
        <Link to="/">
          <Typography element="p1" variant="p">
            Ajuda
          </Typography>
        </Link>
      </ContainerLinks>
    </FooterStyled>
  );
};

export default Footer;
