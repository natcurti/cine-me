import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 95%;
  background-color: deeppink;
  position: relative;
  overflow: hidden;
`;

export const ContainerCards = styled.div<{ $width: number }>`
  width: 100%;
  display: flex;
  gap: ${(props) => props.theme.sizes.xs};
  transform: translateX(-${(props) => props.$width}px);
  transition: 1s linear;

  @media (min-width: 768px) {
    gap: ${(props) => props.theme.sizes.sm};
  }
`;

const ButtonIconsBase = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 1000;
`;

export const ButtonIconRight = styled(ButtonIconsBase)`
  right: 0;
`;

export const ButtonIconLeft = styled(ButtonIconsBase)`
  left: 0;
`;
