import { useContext } from "react";
import { MoviesContext } from "src/context/moviesContext";
import { TvShowContext } from "src/context/tvShowContext";
import { UpcomingContext } from "src/context/upcomingContext";

export const useMoviesContext = () => {
  return useContext(MoviesContext);
};

export const useTvShowContext = () => {
  return useContext(TvShowContext);
};

export const useUpcomingContext = () => {
  return useContext(UpcomingContext);
};
