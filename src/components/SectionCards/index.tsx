import Carousel from "../Carousel";
import Typography from "../Typography";
import { SectionStyled } from "./styled";

const SectionCards = () => {
  return (
    <SectionStyled>
      <Typography element="h3" variant="h2">
        Populares
      </Typography>
      <Carousel />
    </SectionStyled>
  );
};

export default SectionCards;
