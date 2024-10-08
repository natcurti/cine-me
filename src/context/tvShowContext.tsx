import { createContext, useEffect, useState } from "react";
import { http_tmdb } from "src/http/http-tmdb";
import { IStreamingItem } from "src/interfaces/IStreamingItem";

interface ITvShowProvider {
  children: React.ReactNode;
}

const initialValue: IStreamingItem[] = [];

export const TvShowContext = createContext({
  popularTvShow: initialValue,
  isLoading: true,
  error: "",
});

export const TvShowProvider = ({ children }: ITvShowProvider) => {
  const [popularTvShow, setPopularTvShow] = useState<IStreamingItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setTimeout(() => {
      http_tmdb
        .get("/tv/popular?language=pt-BR")
        .then((response) => setPopularTvShow(response.data.results))
        .catch((error) => setError(error.message))
        .finally(() => setIsLoading(false));
    }, 3000);
  }, []);

  return (
    <TvShowContext.Provider value={{ popularTvShow, isLoading, error }}>
      {children}
    </TvShowContext.Provider>
  );
};
