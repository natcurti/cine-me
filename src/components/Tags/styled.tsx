import styled from "styled-components";

export const TagsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.sizes.sm};
`;

export const TagSyled = styled.span`
  background-color: ${(props) => props.theme.colors.mediumGray};
  padding: ${(props) => props.theme.sizes.sm};
  border-radius: ${(props) => props.theme.sizes.xs};
`;
