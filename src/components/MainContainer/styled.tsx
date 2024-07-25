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
    background-color: ${(props) => props.theme.colors.black};
    opacity: 0.7;
    z-index: 1;
  }

  @media (min-width: 768px) {
    height: 33rem;
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

  @media (min-width: 540px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    padding: 10.5rem 3rem;
  }
`;
