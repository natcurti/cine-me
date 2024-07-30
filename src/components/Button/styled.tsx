import styled from "styled-components";

export const ButtonStyledSmall = styled.button`
  background-color: ${(props) => props.theme.colors.red};
  border-radius: 0.25rem;
  padding: 0.1rem 0.65rem;
  border: none;
  height: ${(props) => props.theme.sizes.lg};
  cursor: pointer;
  transition: background-color 0.5s;

  &:hover {
    background-color: ${(props) => props.theme.colors.darkRed};
  }

  @media (min-width: 768px) {
    width: 100px;
    height: ${(props) => props.theme.sizes.xl};
  }
`;

export const ButtonStyledLarge = styled.button`
  background-color: ${(props) => props.theme.colors.red};
  border-radius: 0.25rem;
  padding: 0.1rem 0.65rem;
  border: none;
  height: ${(props) => props.theme.sizes.xxxl};
  width: 100%;
  font-size: ${(props) => props.theme.sizes.md};
  font-family: ${(props) => props.theme.fontFamily.bold};
  cursor: pointer;
  transition: background-color 0.5s;

  &:hover {
    background-color: ${(props) => props.theme.colors.darkRed};
  }
`;
