import { useMoviesContext } from "src/hooks/movies";
import Card from "../Card";
import Typography from "../Typography";
import { ContainerCards, SectionStyled } from "./styled";

const SectionCards = () => {
  const { popularMovies } = useMoviesContext();

  return (
    <SectionStyled>
      <Typography element="h3" variant="h4">
        Populares
      </Typography>
      <ContainerCards>
        {popularMovies.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </ContainerCards>
    </SectionStyled>
  );
};

export default SectionCards;
