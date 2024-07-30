import { HomeIcon, MoviesIcon, TvSeriesIcon } from "src/components/Icons";
import { ListStyled, SpanStyled } from "./styled";
import { NavLink } from "react-router-dom";

const MenuItems = () => {
  return (
    <ListStyled>
      <li>
        <NavLink to="/">
          {({ isActive }) => (
            <SpanStyled $isActive={isActive}>
              <HomeIcon color={isActive ? "#FFF" : "#807E81"} />
              Início
            </SpanStyled>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/filmes">
          {({ isActive }) => (
            <SpanStyled $isActive={isActive}>
              <MoviesIcon color={isActive ? "#FFF" : "#807E81"} />
              Filmes
            </SpanStyled>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/series">
          {({ isActive }) => (
            <SpanStyled $isActive={isActive}>
              <TvSeriesIcon color={isActive ? "#FFF" : "#807E81"} />
              Séries
            </SpanStyled>
          )}
        </NavLink>
      </li>
    </ListStyled>
  );
};

export default MenuItems;
