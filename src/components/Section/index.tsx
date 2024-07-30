import { IStreamingItem } from "src/interfaces/IStreamingItem";
import { SectionStyled } from "./styled";
import Carousel from "../Carousel";

const Section = ({
  items,
  type,
  children,
}: {
  items: IStreamingItem[];
  type: "movie" | "serie";
  children: React.ReactNode;
}) => {
  return (
    <SectionStyled>
      {children}
      <Carousel items={items} type={type} />
    </SectionStyled>
  );
};

export default Section;
