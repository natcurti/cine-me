import Card from "src/components/Card";
import MainContainer from "src/components/MainContainer";
import NavBar from "src/components/NavBar";
import { useMoviesContext } from "src/hooks/movies";

const Home = () => {
  const { popularMovies, error } = useMoviesContext();

  console.log(popularMovies, error);

  return (
    <div>
      <NavBar />
      <MainContainer />
      <Card />
    </div>
  );
};

export default Home;
