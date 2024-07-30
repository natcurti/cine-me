import { useNavigate } from "react-router-dom";
import Button from "../Button";
import Typography from "../Typography";
import { HeaderStyled, TypographyContainer } from "./styled";

const HeaderContainer = () => {
  const navigate = useNavigate();

  return (
    <HeaderStyled>
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
    </HeaderStyled>
  );
};

export default HeaderContainer;
