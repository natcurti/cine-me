import styled from "styled-components";

export const MainContainer = styled.main`
  margin: 5rem auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.sizes.md};

  @media (min-width: 768px) {
    margin-top: 10rem;
    width: 75%;
  }
`;

export const ContainerCards = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.sizes.md};
`;
