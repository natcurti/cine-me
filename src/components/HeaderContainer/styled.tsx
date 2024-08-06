import styled from "styled-components";

export const HeaderStyled = styled.header<{ $isLoggedIn: boolean }>`
  height: 28rem;
  width: 100%;
  background-image: ${(props) =>
    props.$isLoggedIn
      ? `url("/wallpaper.jpg")`
      : `url("/background-cineme.jpg")`};
  background-size: ${(props) => props.$isLoggedIn && "300%"};
  background-position: ${(props) => props.$isLoggedIn && "center"};
  background-repeat: no-repeat;
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

  @media (min-width: 540px) {
    background-size: ${(props) => props.$isLoggedIn && "200%"};
  }

  @media (min-width: 768px) {
    height: ${(props) => !props.$isLoggedIn && "35rem"};
    background-size: ${(props) => props.$isLoggedIn && "100%"};
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

export const LogoContainer = styled.section`
  z-index: 100;
  width: 12.5rem;
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);

  img {
    width: 100%;
  }

  h1 {
    text-align: center;
    margin-bottom: ${(props) => props.theme.sizes.md};
  }

  @media (min-width: 768px) {
    width: 15rem;
    left: 3rem;
    transform: none;
    bottom: 3rem;
  }
`;
