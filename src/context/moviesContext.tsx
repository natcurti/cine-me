import { createContext, useEffect, useState } from "react";
import { http_tmdb } from "src/http/http-tmdb";
import { IStreamingItem } from "src/interfaces/IStreamingItem";

interface IMoviesProvider {
  children: React.ReactNode;
}

const initialValue: IStreamingItem[] = [];

export const MoviesContext = createContext({
  popularMovies: initialValue,
  isLoading: true,
  error: "",
});

export const MoviesProvider = ({ children }: IMoviesProvider) => {
  const [popularMovies, setPopularMovies] = useState<IStreamingItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setTimeout(() => {
      http_tmdb
        .get("/movie/popular?language=pt-BR&include_videos=true")
        .then((response) => setPopularMovies(response.data.results))
        .catch((error) => setError(error.message))
        .finally(() => setIsLoading(false));
    }, 3000);
  }, []);

  return (
    <MoviesContext.Provider value={{ popularMovies, isLoading, error }}>
      {children}
    </MoviesContext.Provider>
  );
};
