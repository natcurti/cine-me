import styled from "styled-components";

export const MainStyled = styled.main`
  margin: 5rem 0;
  padding: ${(props) => props.theme.sizes.md};
`;

export const IframeStyled = styled.iframe`
  width: 100%;
  height: 15rem;
  margin-bottom: ${(props) => props.theme.sizes.md};

  @media (min-width: 768px) {
    height: 30rem;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  gap: ${(props) => props.theme.sizes.md};

  @media (min-width: 992px) {
    padding: 5rem;
  }
`;

export const SectionDetails = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.sizes.lg};
  margin-bottom: ${(props) => props.theme.sizes.xl};
  width: 100%;

  div {
    h1 {
      margin-bottom: ${(props) => props.theme.sizes.xs};
    }
  }

  @media (min-width: 768px) {
    width: 65%;
  }
`;

export const ContainerIcons = styled.div`
  display: flex;
  gap: ${(props) => props.theme.sizes.lg};
`;

export const ButtonIcon = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.theme.sizes.sm};
`;

export const ContainerText = styled.div`
  p {
    margin-top: ${(props) => props.theme.sizes.sm};
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    p {
      font-size: 1.25rem;
    }
  }
`;

export const ContainerError = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.theme.sizes.lg};
`;

export const SectionMoviesToYou = styled.section`
  display: none;

  @media (min-width: 768px) {
    width: 35%;
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.sizes.sm};
  }
`;

export const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${(props) => props.theme.sizes.md};
`;
