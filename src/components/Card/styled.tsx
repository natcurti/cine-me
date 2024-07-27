import styled from "styled-components";

export const CardContainer = styled.div`
  width: 6rem;
  border-radius: 0.15rem;
  display: grid;
  place-items: center;

  @media (min-width: 768px) {
    width: 9.85rem;
  }
`;

export const ImageStyled = styled.img`
  width: 6rem;
  object-fit: contain;
  border-radius: 0.15rem;

  @media (min-width: 768px) {
    width: 9.85rem;
  }
`;
