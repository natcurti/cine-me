import styled from "styled-components";

export const SectionStyled = styled.section`
  margin-top: ${(props) => props.theme.sizes.lg};
  padding-left: ${(props) => props.theme.sizes.lg};
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.sizes.sm};
`;

export const ContainerCards = styled.div`
  display: flex;
  gap: ${(props) => props.theme.sizes.md};
`;
