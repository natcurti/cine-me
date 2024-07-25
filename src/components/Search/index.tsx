import { useState } from "react";
import { SearchIcon } from "../Icons";
import {
  ButtonSearch,
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
        <ButtonSearch>
          <SearchIcon />
        </ButtonSearch>
      </LabelStyled>
    </ContainerStyled>
  );
};

export default Search;
