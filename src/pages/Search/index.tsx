import { useEffect, useState } from "react";
import Typography from "src/components/Typography";
import {
  useMoviesContext,
  useSearchContext,
  useTvShowContext,
} from "src/hooks/custom";
import { IStreamingItem } from "src/interfaces/IStreamingItem";
import { ContainerCards, MainContainer } from "./styled";
import Card from "src/components/Card";

const SearchPage = () => {
  const { value, setValue } = useSearchContext();
  const [moviesResult, setMoviesResult] = useState<IStreamingItem[]>([]);
  const [tvShowResult, setTvShowResult] = useState<IStreamingItem[]>([]);
  const { popularMovies } = useMoviesContext();
  const { popularTvShow } = useTvShowContext();

  useEffect(() => {
    if (value) {
      const movies = popularMovies.filter((movie) =>
        movie.title?.toLowerCase().includes(value.toLowerCase())
      );
      const series = popularTvShow.filter((serie) =>
        serie.name?.toLowerCase().includes(value.toLowerCase())
      );

      if (movies.length > 0) {
        setMoviesResult(movies);
      }

      if (series.length > 0) {
        setTvShowResult(series);
      }
    }
    setValue("");
  }, [value, setValue, popularMovies, popularTvShow]);

  return (
    <MainContainer>
      <Typography element="h1" variant="h2">
        Filmes Encontrados
      </Typography>
      {moviesResult.length === 0 && (
        <Typography element="p1" variant="h4">
          Não encontramos filmes para esta busca.
        </Typography>
      )}
      <ContainerCards>
        {moviesResult.map((movie) => (
          <Card itemToShow={movie} type="movie" key={movie.id} />
        ))}
      </ContainerCards>
      <Typography element="h1" variant="h2">
        Séries Encontradas
      </Typography>
      {tvShowResult.length === 0 && (
        <Typography element="p1" variant="h4">
          Não encontramos séries para esta busca.
        </Typography>
      )}
      <ContainerCards>
        {tvShowResult.map((movie) => (
          <Card itemToShow={movie} type="tv" key={movie.id} />
        ))}
      </ContainerCards>
    </MainContainer>
  );
};

export default SearchPage;
