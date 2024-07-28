import {
  ButtonIconLeft,
  ButtonIconRight,
  CarouselContainer,
  ContainerCards,
  SectionStyled,
} from "./styled";
import {
  MdOutlineKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import Card from "../Card";
import { useRef, useState } from "react";
import { IMovieAndTv } from "src/interfaces/IMovieAndTv";

const Carousel = ({ items }: { items: IMovieAndTv[] }) => {
  const carouselContainer = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const iconProps = {
    size: "40",
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
    <SectionStyled>
      <CarouselContainer ref={carouselContainer}>
        {width > 0 && (
          <ButtonIconLeft onClick={prevCards}>
            <MdOutlineKeyboardArrowLeft {...iconProps} />
          </ButtonIconLeft>
        )}
        <ContainerCards $width={width}>
          {items.map((itemToShow) => (
            <Card itemToShow={itemToShow} key={itemToShow.id} />
          ))}
        </ContainerCards>
        <ButtonIconRight onClick={nextCards}>
          <MdKeyboardArrowRight {...iconProps} />
        </ButtonIconRight>
      </CarouselContainer>
    </SectionStyled>
  );
};

export default Carousel;
