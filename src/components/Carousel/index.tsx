import { useMoviesContext } from "src/hooks/movies";
import {
  ButtonIconLeft,
  ButtonIconRight,
  CarouselContainer,
  ContainerCards,
} from "./styled";
import {
  MdOutlineKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import Card from "../Card";
import { useRef, useState } from "react";

const Carousel = () => {
  const { popularMovies } = useMoviesContext();
  const carouselContainer = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const iconProps = {
    size: "30",
  };

  const prevCards = () => {
    if (carouselContainer.current && width > 0) {
      setWidth(width - carouselContainer.current.offsetWidth);
    }
  };

  const nextCards = () => {
    if (
      carouselContainer.current &&
      carouselContainer.current.offsetWidth !==
        carouselContainer.current.scrollWidth
    ) {
      setWidth(width + carouselContainer.current.offsetWidth);
    }
  };

  return (
    <CarouselContainer ref={carouselContainer}>
      {width > 0 && (
        <ButtonIconLeft onClick={prevCards}>
          <MdOutlineKeyboardArrowLeft {...iconProps} />
        </ButtonIconLeft>
      )}
      <ContainerCards $width={width}>
        {popularMovies.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </ContainerCards>
      <ButtonIconRight onClick={nextCards}>
        <MdKeyboardArrowRight {...iconProps} />
      </ButtonIconRight>
    </CarouselContainer>
  );
};

export default Carousel;
