import Typography from "../Typography";
import { CardContainer, TitleContainer } from "./styled";

const Card = () => {
  return (
    <CardContainer>
      <TitleContainer>
        <Typography element="p1" variant="strong">
          Titulo
        </Typography>
      </TitleContainer>
    </CardContainer>
  );
};

export default Card;
