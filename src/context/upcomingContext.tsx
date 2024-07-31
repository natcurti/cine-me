import { createContext, useEffect, useState } from "react";
import { http_tmdb } from "src/http/http-tmdb";
import { IStreamingItem } from "src/interfaces/IStreamingItem";

interface IUpcomingProvider {
  children: React.ReactNode;
}

const initialValue: IStreamingItem[] = [];

export const UpcomingContext = createContext({
  upcomingMovies: initialValue,
  isLoading: true,
  error: "",
});

export const UpcomingProvider = ({ children }: IUpcomingProvider) => {
  const [upcomingMovies, setPopularMovies] = useState<IStreamingItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    http_tmdb
      .get("/movie/upcoming?language=pt-BR")
      .then((response) => setPopularMovies(response.data.results))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <UpcomingContext.Provider value={{ upcomingMovies, isLoading, error }}>
      {children}
    </UpcomingContext.Provider>
  );
};
