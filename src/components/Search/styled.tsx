import styled from "styled-components";

export const LabelTitle = styled.span`
  opacity: 0;
  position: absolute;
  width: 1px;
  height: 1px;
  left: -1000px;
`;

export const ContainerStyled = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xs};
`;

export const InputStyled = styled.input`
  width: 6.25rem;
  padding: 0.25rem;

  &:focus {
    outline-color: ${(props) => props.theme.colors.blue};
  }
`;

export const LabelStyled = styled.label`
  display: grid;
  place-items: center;
`;
