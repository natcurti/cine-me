import { useContext } from "react";
import { GenreContext } from "src/context/genreContext";
import { MoviesContext } from "src/context/moviesContext";
import { SessionContext } from "src/context/sessionContext";
import { TvShowContext } from "src/context/tvShowContext";
import { UpcomingContext } from "src/context/upcomingContext";
import { UserContext } from "src/context/userContext";

export const useMoviesContext = () => {
  return useContext(MoviesContext);
};

export const useTvShowContext = () => {
  return useContext(TvShowContext);
};

export const useUpcomingContext = () => {
  return useContext(UpcomingContext);
};

export const useUserContext = () => {
  return useContext(UserContext);
};

export const useSessionContext = () => {
  return useContext(SessionContext);
};

export const useGenreContext = () => {
  return useContext(GenreContext);
};
