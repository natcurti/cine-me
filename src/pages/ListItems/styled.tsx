import styled from "styled-components";

export const MainContainer = styled.main`
  margin: 5rem auto;
  width: 95%;

  h1 {
    margin-bottom: ${(props) => props.theme.sizes.lg};
    text-align: center;
  }

  @media (min-width: 768px) {
    width: 85%;
  }
`;

export const ContainerCards = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.25rem;
`;
