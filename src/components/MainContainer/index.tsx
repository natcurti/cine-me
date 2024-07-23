import Button from "../Button";
import Typography from "../Typography";
import { SectionStyled, TypographyContainer } from "./styled";

const MainContainer = () => {
  return (
    <SectionStyled>
      <TypographyContainer>
        <Typography element="h2" variant="h2">
          Bem vindo ao Cine.me!
        </Typography>
        <Typography element="h1" variant="h1">
          Filmes e séries para todos os gostos na palma da sua mão!
        </Typography>
        <Typography element="subtitle" variant="strong">
          Acesse milhares de histórias incríveis para maratonar quando e onde
          você quiser
        </Typography>
        <Button size="lg">Cadastre-se!</Button>
      </TypographyContainer>
    </SectionStyled>
  );
};

export default MainContainer;
