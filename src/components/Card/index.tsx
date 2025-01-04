import { IStreamingItem } from "src/interfaces/IStreamingItem";
import { ImageStyled } from "./styled";
import { Link } from "react-router-dom";

const Card = ({
  itemToShow,
  type,
}: {
  itemToShow: IStreamingItem;
  type: "movie" | "tv" | undefined;
}) => {
  const imgUrlBase = "https://image.tmdb.org/t/p/w342";
  const imgPath = `${imgUrlBase}${itemToShow.poster_path}`;

  return (
    <>
      <Link
        to={`${
          type === "movie"
            ? `/filmes/${itemToShow.id}`
            : `/series/${itemToShow.id}`
        }`}
      >
        <ImageStyled src={imgPath} />
      </Link>
    </>
  );
};

export default Card;
