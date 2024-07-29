import styled from "styled-components";

export const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  margin: ${(props) => props.theme.sizes.xxl} auto;
  width: 95vw;
`;
