import styled from "styled-components";

export const SectionStyled = styled.section`
  height: 27.625rem;
  width: 100%;
  background-image: url("/background-cineme.jpg");
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(
      ${(props) => props.theme.colors.black},
      transparent,
      ${(props) => props.theme.colors.black}
    );
    z-index: 1;
  }
`;
