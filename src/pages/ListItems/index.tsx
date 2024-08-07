import Card from "src/components/Card";
import Typography from "src/components/Typography";
import { useMoviesContext, useTvShowContext } from "src/hooks/custom";
import { ContainerCards, MainContainer } from "./styled";
import { useLocation } from "react-router-dom";
import Spinner from "src/components/Spinner";

const ListItems = () => {
  const { pathname } = useLocation();
  const {
    popularMovies,
    isLoading: isLoadingMovies,
    error: errorMovies,
  } = useMoviesContext();
  const {
    popularTvShow,
    isLoading: isLoadingSeries,
    error: errorSeries,
  } = useTvShowContext();

  return (
    <MainContainer>
      <Typography element="h1" variant="h2">
        Lista de {pathname === "/filmes" ? "filmes" : "séries"}
      </Typography>
      {(isLoadingMovies || isLoadingSeries) && <Spinner />}
      <ContainerCards>
        {pathname === "/filmes" && errorMovies && (
          <Typography element="h2" variant="h4">
            Não foi possível carregar a lista de filmes.
          </Typography>
        )}
        {pathname === "/series" && errorSeries && (
          <Typography element="h2" variant="h4">
            Não foi possível carregar a lista de séries.
          </Typography>
        )}
        {pathname === "/filmes" &&
          !errorMovies &&
          popularMovies.map((movie) => (
            <Card key={movie.id} itemToShow={movie} type="movie" />
          ))}
        {pathname === "/series" &&
          !errorSeries &&
          popularTvShow.map((serie) => (
            <Card key={serie.id} itemToShow={serie} type="tv" />
          ))}
      </ContainerCards>
    </MainContainer>
  );
};

export default ListItems;
