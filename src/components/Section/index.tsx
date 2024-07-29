import { IStreamingItem } from "src/interfaces/IStreamingItem";
import { SectionStyled } from "./styled";
import Carousel from "../Carousel";

const Section = ({
  items,
  children,
}: {
  items: IStreamingItem[];
  children: React.ReactNode;
}) => {
  return (
    <SectionStyled>
      {children}
      <Carousel items={items} />
    </SectionStyled>
  );
};

export default Section;
