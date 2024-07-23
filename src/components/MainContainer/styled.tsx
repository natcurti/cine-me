import styled from "styled-components";

export const SectionStyled = styled.section`
  height: 28rem;
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

export const TypographyContainer = styled.div`
  position: relative;
  z-index: 100;
  padding: 5.5rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-shadow: 3px 3px 4px rgba(24, 24, 24, 1);
`;
