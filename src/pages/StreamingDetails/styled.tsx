import styled from "styled-components";

export const MainStyled = styled.main`
  margin: 5rem 0;
  padding: ${(props) => props.theme.sizes.md};
`;

export const IframeStyled = styled.iframe`
  width: 100%;
  height: 15rem;
  margin-bottom: ${(props) => props.theme.sizes.md};
`;

export const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.sizes.lg};

  div {
    h1 {
      margin-bottom: ${(props) => props.theme.sizes.xs};
    }
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
    font-size: 1.5rem;
  }
`;
