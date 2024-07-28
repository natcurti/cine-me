import { createContext, useEffect, useState } from "react";
import { http } from "src/http/instance";
import { IMovieAndTv } from "src/interfaces/IMovieAndTv";

interface ITvShowProvider {
  children: React.ReactNode;
}

const initialValue: IMovieAndTv[] = [];

export const TvShowContext = createContext({
  popularTvShow: initialValue,
  error: "",
});

export const TvShowProvider = ({ children }: ITvShowProvider) => {
  const [popularTvShow, setPopularTvShow] = useState<IMovieAndTv[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    http
      .get("/tv/popular?language=pt-BR")
      .then((response) => setPopularTvShow(response.data.results))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <TvShowContext.Provider value={{ popularTvShow, error }}>
      {children}
    </TvShowContext.Provider>
  );
};
