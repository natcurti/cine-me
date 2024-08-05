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
import { IStreamingItem } from "src/interfaces/IStreamingItem";

const Carousel = ({
  items,
  type,
}: {
  items: IStreamingItem[];
  type: "movie" | "tv" | undefined;
}) => {
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
    <CarouselContainer ref={carouselContainer}>
      {width > 0 && (
        <ButtonIconLeft onClick={prevCards}>
          <MdOutlineKeyboardArrowLeft {...iconProps} />
        </ButtonIconLeft>
      )}
      <ContainerCards $width={width}>
        {items.map((itemToShow) => (
          <Card itemToShow={itemToShow} key={itemToShow.id} type={type} />
        ))}
      </ContainerCards>
      <ButtonIconRight onClick={nextCards}>
        <MdKeyboardArrowRight {...iconProps} />
      </ButtonIconRight>
    </CarouselContainer>
  );
};

export default Carousel;
