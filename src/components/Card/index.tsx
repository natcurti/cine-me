import { IStreamingItem } from "src/interfaces/IStreamingItem";
import { ImageStyled } from "./styled";
import { Link } from "react-router-dom";

const Card = ({ itemToShow }: { itemToShow: IStreamingItem }) => {
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
