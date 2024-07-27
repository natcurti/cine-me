import { IMovie } from "src/interfaces/IMovie";
import { ImageStyled } from "./styled";

const Card = ({ movie }: { movie: IMovie }) => {
  const image = import.meta.env.VITE_BASE_URL_IMAGES;

  const imgPath = `${image}${movie.poster_path}`;

  return <ImageStyled src={imgPath} />;
};

export default Card;
