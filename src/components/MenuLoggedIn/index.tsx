import { FaUserCircle } from "react-icons/fa";
import {
  ButtonLogout,
  ButtonMenu,
  ContainerBackdrop,
  ContainerMenu,
  FooterMenu,
  HeaderMenu,
  ListItemStyled,
} from "./styled";
import { useState } from "react";
import { useSessionContext, useUserContext } from "src/hooks/custom";
import Typography from "../Typography";
import { Link } from "react-router-dom";
import { StoreToken } from "src/utils/StoreToken";

const MenuLoggedIn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setIsLoggedIn } = useSessionContext();
  const { user, setName } = useUserContext();

  const logout = () => {
    StoreToken.deleteToken();
    setIsLoggedIn(false);
    setName("");
  };

  return (
    <>
      <ButtonMenu onClick={() => setIsOpen(!isOpen)}>
        <FaUserCircle size={30} />
      </ButtonMenu>
      <ContainerBackdrop onClick={() => setIsOpen(!isOpen)} $isOpen={isOpen}>
        <ContainerMenu $isOpen={isOpen}>
          <HeaderMenu>
            <FaUserCircle size={30} />
            <Typography element="h4" variant="h4">
              {user.name}
            </Typography>
          </HeaderMenu>
          <ul>
            <ListItemStyled>
              <Link to="">Configurações</Link>
            </ListItemStyled>
            <ListItemStyled>
              <Link to="">Conta</Link>
            </ListItemStyled>
            <ListItemStyled>
              <Link to="">Assinatura</Link>
            </ListItemStyled>
          </ul>
          <FooterMenu>
            <ButtonLogout onClick={logout}>Sair</ButtonLogout>
          </FooterMenu>
        </ContainerMenu>
      </ContainerBackdrop>
    </>
  );
};

export default MenuLoggedIn;
