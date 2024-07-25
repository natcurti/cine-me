import styled from "styled-components";

export const CardContainer = styled.div`
  width: 6.25rem;
  height: 8.5rem;
  padding-left: ${(props) => props.theme.sizes.xs};
  background-color: deeppink;
  position: relative;
`;

export const TitleContainer = styled.span`
  position: absolute;
  bottom: ${(props) => props.theme.sizes.xs};
`;
