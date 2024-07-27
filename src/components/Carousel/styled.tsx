import styled from "styled-components";

export const SectionStyled = styled.section`
  margin-top: ${(props) => props.theme.sizes.md};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.theme.sizes.sm};
  margin-bottom: 100px;
  position: relative;

  @media (min-width: 768px) {
    margin-top: ${(props) => props.theme.sizes.xl};
  }
`;

export const CarouselContainer = styled.div`
  width: 95vw;
  overflow: hidden;
`;

export const ContainerCards = styled.div<{ $width: number }>`
  display: flex;
  gap: ${(props) => props.theme.sizes.xs};
  transform: translateX(-${(props) => props.$width}px);
  transition: 1s linear;
`;

const ButtonIconsBase = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  display: grid;
  place-items: center;
  cursor: pointer;
  box-shadow: 10px 10px 25px -5px rgba(0, 0, 0, 0.75);
  z-index: 10000;
`;

export const ButtonIconRight = styled(ButtonIconsBase)`
  right: ${(props) => props.theme.sizes.xs};
`;

export const ButtonIconLeft = styled(ButtonIconsBase)`
  left: ${(props) => props.theme.sizes.xs};
`;
