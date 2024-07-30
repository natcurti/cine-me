import { createContext, useEffect, useState } from "react";
import { http } from "src/http/instance";
import { IGenre } from "src/interfaces/IGenre";

const initialValue: IGenre[] = [];

export const GenreContext = createContext({
  moviesGenres: initialValue,
  tvGenres: initialValue,
});

const GenreProvider = ({ children }: { children: React.ReactNode }) => {
  const [moviesGenres, setMoviesGenres] = useState<IGenre[]>([]);
  const [tvGenres, setTvGenres] = useState<IGenre[]>([]);

  useEffect(() => {
    http
      .get("/genre/movie/list")
      .then((response) => setMoviesGenres(response.data.genres));
  }, []);

  useEffect(() => {
    http
      .get("/genre/tv/list")
      .then((response) => setTvGenres(response.data.genres));
  }, []);

  return (
    <GenreContext.Provider value={{ moviesGenres, tvGenres }}>
      {children}
    </GenreContext.Provider>
  );
};

export default GenreProvider;
