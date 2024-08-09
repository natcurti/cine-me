import { memo, useState } from "react";
import { SearchIcon } from "../Icons";
import {
  ButtonSearch,
  ContainerStyled,
  InputStyled,
  LabelStyled,
  LabelTitle,
} from "./styled";
import { useSearchContext } from "src/hooks/custom";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [showInput, setShowInput] = useState(false);
  const { value, setValue } = useSearchContext();
  const navigate = useNavigate();

  const handleSearch = () => {
    if (value) {
      navigate("/resultados");
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

export default memo(Search);
