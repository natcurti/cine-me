import styled from "styled-components";

export const LabelStyled = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

export const ContainerInputAndIcon = styled.div`
  position: relative;
`;

export const InputStyled = styled.input`
  width: 100%;
  height: ${(props) => props.theme.sizes.xxl};
  border-radius: 0.15rem;
  border: none;
  padding-left: ${(props) => props.theme.sizes.xl};
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.sizes.sm};

  @media (min-width: 540px) {
    font-size: ${(props) => props.theme.sizes.md};
  }
`;

export const SpanIcon = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0.25rem;
  display: flex;
`;
