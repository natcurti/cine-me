import { useNavigate } from "react-router-dom";
import Button from "../Button";
import Typography from "../Typography";
import { HeaderStyled, LogoContainer, TypographyContainer } from "./styled";
import { useSessionContext } from "src/hooks/custom";
import logo from "/logo-serie.png";

const HeaderContainer = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSessionContext();

  return (
    <HeaderStyled $isLoggedIn={isLoggedIn}>
      {isLoggedIn ? (
        <LogoContainer>
          <img src={logo} alt="Série House of Dragons" />
          <Typography element="h1" variant="p">
            Temporada completa! Volte a Westeros e maratone a série favorita dos
            fãs, que tem de tudo, menos paz.
          </Typography>
          <Button size="lg" onClick={() => navigate("/series/94997")}>
            Ir para a série
          </Button>
        </LogoContainer>
      ) : (
        <TypographyContainer>
          <Typography element="h2" variant="h2">
            Bem vindo ao Cine.me
          </Typography>
          <Typography element="h1" variant="h1">
            Filmes e séries para todos os gostos na palma da sua mão.
          </Typography>
          <Typography element="subtitle" variant="strong">
            Acesse milhares de histórias incríveis para maratonar quando e onde
            você quiser
          </Typography>
          <Button size="lg" onClick={() => navigate("/cadastro")}>
            Cadastre-se!
          </Button>
        </TypographyContainer>
      )}
    </HeaderStyled>
  );
};

export default HeaderContainer;
