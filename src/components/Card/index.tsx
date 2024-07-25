import { IMovie } from "src/interfaces/IMovie";
import { CardContainer, ImageStyled } from "./styled";

const Card = ({ movie }: { movie: IMovie }) => {
  const image = import.meta.env.VITE_BASE_URL_IMAGES;

  const imgPath = `${image}${movie.poster_path}`;

  return (
    <CardContainer>
      <ImageStyled src={imgPath} />
    </CardContainer>
  );
};

export default Card;
