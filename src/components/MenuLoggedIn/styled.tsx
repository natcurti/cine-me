import styled from "styled-components";

export const ButtonMenu = styled.button`
  background-color: transparent;
  border: none;
`;

export const ContainerBackdrop = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  width: ${(props) => (props.$isOpen ? "100%" : 0)};
  height: 100vh;
  top: 0;
  right: 0;
  z-index: 1000;
  background-color: transparent;
`;

export const ContainerMenu = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  height: 100vh;
  top: 0;
  right: 0;
  width: ${(props) => (props.$isOpen ? "12rem" : "0")};
  z-index: 1000;
  background-color: ${(props) => props.theme.colors.darkGray};
  display: flex;
  flex-direction: column;
  transition: width 0.5s linear;
`;

export const HeaderMenu = styled.header`
  background-color: ${(props) => props.theme.colors.black};
  margin-bottom: ${(props) => props.theme.sizes.md} 0;
  padding: ${(props) => props.theme.sizes.md};
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.sizes.sm};
  height: 4rem;
  z-index: 1000;
`;

export const ListItemStyled = styled.li`
  padding: ${(props) => props.theme.sizes.lg} ${(props) => props.theme.sizes.md};
  width: 100%;
  font-size: 1.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    background-color: ${(props) => props.theme.colors.mediumGray};
  }
`;

export const ButtonLogout = styled.button`
  padding: ${(props) => props.theme.sizes.md};
  border: none;
  width: 100%;
  background-color: ${(props) => props.theme.colors.red};
  font-size: 1.25rem;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.darkRed};
  }
`;

export const FooterMenu = styled.footer`
  width: 100%;
  position: absolute;
  bottom: 0;
`;
