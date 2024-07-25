import { useContext } from "react";
import { MoviesContext } from "src/context/moviesContext";

export const useMoviesContext = () => {
  return useContext(MoviesContext);
};
