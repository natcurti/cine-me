import { useState } from "react";
import { SearchIcon } from "../Icons";
import {
  ContainerStyled,
  InputStyled,
  LabelStyled,
  LabelTitle,
} from "./styled";

const Search = () => {
  const [showInput, setShowInput] = useState(false);

  return (
    <ContainerStyled>
      {showInput && (
        <InputStyled
          id="input-search"
          onBlur={() => setShowInput(false)}
          placeholder="Buscar.."
        />
      )}
      <LabelStyled htmlFor="input-search" onClick={() => setShowInput(true)}>
        <LabelTitle>Busque por filmes e séries:</LabelTitle>
        <SearchIcon />
      </LabelStyled>
    </ContainerStyled>
  );
};

export default Search;
