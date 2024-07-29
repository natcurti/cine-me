import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 95vw;
  overflow: hidden;
  position: relative;

  &:hover {
    button {
      display: block;
    }
  }
`;

export const ContainerCards = styled.div<{ $width: number }>`
  display: flex;
  gap: ${(props) => props.theme.sizes.xs};
  transform: translateX(-${(props) => props.$width}px);
  transition: 1s linear;
`;

const ButtonIconsBase = styled.button`
  display: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 10000;
`;

export const ButtonIconRight = styled(ButtonIconsBase)`
  right: 0;
`;

export const ButtonIconLeft = styled(ButtonIconsBase)`
  left: 0;
`;
