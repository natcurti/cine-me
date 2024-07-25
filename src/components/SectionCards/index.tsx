import { useMoviesContext } from "src/hooks/movies";
import Card from "../Card";

const SectionCards = () => {
  const { popularMovies } = useMoviesContext();

  return (
    <section>
      {popularMovies.map((movie) => (
        <Card movie={movie} key={movie.id} />
      ))}
    </section>
  );
};

export default SectionCards;
