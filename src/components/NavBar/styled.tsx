import styled from "styled-components";

export const NavBarStyled = styled.nav`
  background-color: ${(props) => props.theme.colors.black};
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem;
`;

export const ContainerStyled = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.xs};
  align-items: center;
`;
