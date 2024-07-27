import styled from "styled-components";

export const SectionStyled = styled.section`
  margin-top: ${(props) => props.theme.sizes.md};
  padding-left: ${(props) => props.theme.sizes.md};
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.sizes.sm};
  margin-bottom: 100px;

  @media (min-width: 768px) {
    margin-top: ${(props) => props.theme.sizes.xl};
    padding-left: ${(props) => props.theme.sizes.xl};
  }
`;
