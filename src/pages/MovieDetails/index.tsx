import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMoviesContext } from "src/hooks/custom";
import { http } from "src/http/instance";

const MovieDetails = () => {
  const { id } = useParams();
  const [videoKey, setVideoKey] = useState("");
  console.log(videoKey);

  const { popularMovies } = useMoviesContext();
  const movieToShow = popularMovies.filter((movie) => movie.id === Number(id));
  console.log(movieToShow);

  useEffect(() => {
    http
      .get(`/movie/${id}/videos`)
      .then((response) => setVideoKey(response.data.results[0].key));
  }, [id]);

  return <></>;
};

export default MovieDetails;
