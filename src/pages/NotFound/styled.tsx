import styled from "styled-components";

export const MainContainer = styled.main`
  margin: 5rem auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.theme.sizes.lg};
  text-align: center;

  @media (min-width: 540px) {
    width: 80%;
  }

  @media (min-width: 768px) {
    margin-top: 10rem;
    width: 75%;
  }
`;

export const ContainerButton = styled.div`
  width: 25%;
`;
