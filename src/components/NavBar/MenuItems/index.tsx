import { HomeIcon, MoviesIcon, TvSeriesIcon } from "src/components/Icons";
import MenuItem from "./MenuItem";
import { ListStyled } from "./styled";

const MenuItems = () => {
  return (
    <ListStyled>
      <MenuItem title="Início">
        <HomeIcon color="#807E81" />
      </MenuItem>
      <MenuItem title="Filmes">
        <MoviesIcon color="#807E81" />
      </MenuItem>
      <MenuItem title="Séries">
        <TvSeriesIcon color="#807E81" />
      </MenuItem>
    </ListStyled>
  );
};

export default MenuItems;
