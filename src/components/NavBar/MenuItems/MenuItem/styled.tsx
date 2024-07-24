import styled from "styled-components";

export const LiStyled = styled.li`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.sizes.xs};
`;
