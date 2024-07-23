import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: ${(props) => props.theme.colors.red};
  border-radius: 0.25rem;
  padding: 0.1rem 0.65rem;
  border: none;
  color: ${(props) => props.theme.colors.white};
  height: 1.5rem;
`;
