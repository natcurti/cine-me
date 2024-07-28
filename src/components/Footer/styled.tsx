import styled from "styled-components";

export const FooterStyled = styled.footer`
  min-height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.theme.sizes.lg};
  padding-bottom: ${(props) => props.theme.sizes.lg};

  p {
    text-align: center;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ContainerLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.theme.sizes.lg};
  width: 90%;

  button {
    background-color: transparent;
    border: none;
    display: grid;
    place-items: center;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    width: 25%;
  }
`;

export const ContainerLogo = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    width: 30%;
  }
`;

export const LogoImg = styled.img`
  width: 15rem;
`;
