import { createContext, useEffect, useState } from "react";
import { http } from "src/http/instance";
import { IMovie } from "src/interfaces/IMovie";

interface IMoviesProvider {
  children: React.ReactNode;
}

const initialValue: IMovie[] = [];

export const MoviesContext = createContext({
  popularMovies: initialValue,
  error: "",
});

export const MoviesProvider = ({ children }: IMoviesProvider) => {
  const [popularMovies, setPopularMovies] = useState<IMovie[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    http
      .get("/movie/popular?language=pt-BR")
      .then((response) => setPopularMovies(response.data.results))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <MoviesContext.Provider value={{ popularMovies, error }}>
      {children}
    </MoviesContext.Provider>
  );
};
