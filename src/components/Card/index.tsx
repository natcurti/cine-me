import { ImageStyled } from "./styled";
import { Link } from "react-router-dom";
import { IMovieAndTv } from "src/interfaces/IMovieAndTv";

const Card = ({ itemToShow }: { itemToShow: IMovieAndTv }) => {
  const image = import.meta.env.VITE_BASE_URL_IMAGES;

  const imgPath = `${image}${itemToShow.poster_path}`;

  return (
    <>
      <Link to="">
        <ImageStyled src={imgPath} />
      </Link>
    </>
  );
};

export default Card;
