import Button from "src/components/Button";
import Typography from "src/components/Typography";
import { ContainerButton, MainContainer } from "./styled";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <Typography element="h1" variant="h3">
        Opa!
      </Typography>
      <Typography element="h1" variant="h3">
        Parece que esta página não foi encontrada.
      </Typography>
      <ContainerButton>
        <Button size="lg" onClick={() => navigate("/")}>
          Início
        </Button>
      </ContainerButton>
    </MainContainer>
  );
};

export default NotFound;
