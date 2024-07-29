import { createContext, useEffect, useState } from "react";
import { http } from "src/http/instance";
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
    http
      .get("/tv/popular?language=pt-BR")
      .then((response) => setPopularTvShow(response.data.results))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <TvShowContext.Provider value={{ popularTvShow, isLoading, error }}>
      {children}
    </TvShowContext.Provider>
  );
};
