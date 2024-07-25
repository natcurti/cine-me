import styled from "styled-components";

export const ListStyled = styled.ul`
  position: absolute;
  bottom: -${(props) => props.theme.sizes.xxxl};
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.sizes.lg};

  @media (min-width: 768px) {
    position: static;
    transform: translateX(0);
  }
`;

export const SpanStyled = styled.span<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  color: ${(props) => (props.$isActive ? props.theme.colors.white : "#807E81")};
  gap: ${(props) => props.theme.sizes.xs};
  padding-bottom: 3px;
  border-bottom: 1.5px solid transparent;

  &:hover {
    border-bottom: 1.5px solid;
    border-bottom-color: ${(props) =>
      props.$isActive ? props.theme.colors.white : "#807E81"};
  }
`;
