import { useState } from "react";
import { SearchIcon } from "../Icons";
import {
  ButtonSearch,
  ContainerStyled,
  InputStyled,
  LabelStyled,
  LabelTitle,
} from "./styled";
import { useMoviesContext, useTvShowContext } from "src/hooks/custom";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [showInput, setShowInput] = useState(false);
  const [value, setValue] = useState("");
  const { popularMovies } = useMoviesContext();
  const { popularTvShow } = useTvShowContext();
  const navigate = useNavigate();

  const handleSearch = () => {
    if (value) {
      const movie = popularMovies.filter((movie) =>
        movie.title?.toLowerCase().includes(value.toLowerCase())
      );
      if (movie.length > 0) {
        navigate(`/filmes/${movie[0].id}`);
      }
      if (movie.length === 0) {
        const serie = popularTvShow.filter((serie) =>
          serie.name?.toLowerCase().includes(value.toLowerCase())
        );
        if (serie.length > 0) {
          navigate(`/series/${serie[0].id}`);
        }
        if (serie.length === 0) {
          navigate(`/page-404`);
        }
      }
      setValue("");
    }
  };

  return (
    <ContainerStyled>
      {showInput && (
        <InputStyled
          id="input-search"
          onBlur={() => setShowInput(false)}
          placeholder="Buscar.."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
      <LabelStyled htmlFor="input-search" onClick={() => setShowInput(true)}>
        <LabelTitle>Busque por filmes e séries:</LabelTitle>
        <ButtonSearch onClick={handleSearch}>
          <SearchIcon />
        </ButtonSearch>
      </LabelStyled>
    </ContainerStyled>
  );
};

export default Search;
