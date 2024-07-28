import { useContext } from "react";
import { MoviesContext } from "src/context/moviesContext";
import { TvShowContext } from "src/context/tvShowContext";

export const useMoviesContext = () => {
  return useContext(MoviesContext);
};

export const useTvShowContext = () => {
  return useContext(TvShowContext);
};
