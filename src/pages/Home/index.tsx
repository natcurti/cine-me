import Carousel from "src/components/Carousel";
import MainContainer from "src/components/MainContainer";
import { useMoviesContext, useTvShowContext } from "src/hooks/custom";

const Home = () => {
  const { popularMovies } = useMoviesContext();
  const { popularTvShow } = useTvShowContext();

  return (
    <div>
      <MainContainer />
      <Carousel items={popularMovies} />
      <Carousel items={popularTvShow} />
    </div>
  );
};

export default Home;
