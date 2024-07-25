import { IMovie } from "src/interfaces/IMovie";
import Typography from "../Typography";
import { CardContainer, TitleContainer } from "./styled";

const Card = ({ movie }: { movie: IMovie }) => {
  return (
    <CardContainer>
      <TitleContainer>
        <Typography element="p1" variant="strong">
          {movie.title}
        </Typography>
      </TitleContainer>
    </CardContainer>
  );
};

export default Card;
