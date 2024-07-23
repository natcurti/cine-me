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
  gap: ${(props) => props.theme.sizes.xs};
`;

export const InputStyled = styled.input`
  width: 6.25rem;
  padding: 0.25rem;

  &:focus {
    outline-color: ${(props) => props.theme.colors.blue};
  }

  @media (min-width: 768px) {
    width: 10rem;
  }

  @media (min-width: 992px) {
    width: 14rem;
  }
`;

export const LabelStyled = styled.label`
  display: grid;
  place-items: center;
`;
