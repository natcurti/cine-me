import styled from "styled-components";

export const NavBarStyled = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem;
  border-bottom: 0.3rem solid ${(props) => props.theme.colors.mediumGray};
  position: relative;

  @media (min-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    border-bottom: none;
  }
`;

export const ContainerSearch = styled.div`
  display: flex;
  gap: ${(props) => props.theme.sizes.xs};
  align-items: center;

  @media (min-width: 768px) {
    gap: ${(props) => props.theme.sizes.lg};
  }
`;

export const ContainerItems = styled.div`
  display: flex;
  gap: ${(props) => props.theme.sizes.lg};
`;
