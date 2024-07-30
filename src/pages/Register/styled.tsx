import styled from "styled-components";

export const MainContainer = styled.main`
  background-image: url("/background-cineme.jpg");
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: grid;
  place-items: center;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.black};
    opacity: 0.7;
    z-index: 1;
  }
`;

export const TypographyContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: ${(props) => props.theme.sizes.sm};
  margin-bottom: ${(props) => props.theme.sizes.lg};
`;

export const ContainerName = styled.div`
  display: flex;
  gap: ${(props) => props.theme.sizes.sm};
  justify-content: space-between;

  div {
    width: 100%;
  }
`;

export const ContainerInputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.sizes.md};
`;
