import { IMovie } from "src/interfaces/IMovie";
import { ImageStyled } from "./styled";
import { Link } from "react-router-dom";

const Card = ({ movie }: { movie: IMovie }) => {
  const image = import.meta.env.VITE_BASE_URL_IMAGES;

  const imgPath = `${image}${movie.poster_path}`;

  return (
    <>
      <Link to="">
        <ImageStyled src={imgPath} />
      </Link>
    </>
  );
};

export default Card;
