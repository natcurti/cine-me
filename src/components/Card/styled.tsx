import styled from "styled-components";

export const ImageStyled = styled.img`
  width: calc((33.333 / 100 * 95vw) - ${(props) => props.theme.sizes.xs});
  border-radius: 0.15rem;
  border: 2px solid transparent;

  &:hover {
    border-color: ${(props) => props.theme.colors.white};
  }

  @media (min-width: 540px) {
    width: calc((25 / 100 * 95vw) - ${(props) => props.theme.sizes.xs});
  }

  @media (min-width: 768px) {
    width: calc((16.666 / 100 * 95vw) - ${(props) => props.theme.sizes.xs});
  }
`;
