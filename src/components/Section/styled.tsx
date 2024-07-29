import styled from "styled-components";

export const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: ${(props) => props.theme.sizes.lg};
  margin-bottom: ${(props) => props.theme.sizes.lg};
`;
