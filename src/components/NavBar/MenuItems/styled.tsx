import styled from "styled-components";

export const ListStyled = styled.ul`
  position: absolute;
  bottom: -${(props) => props.theme.sizes.xxxl};
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.sizes.lg};

  @media (min-width: 768px) {
    position: static;
    transform: translateX(0);
  }
`;
