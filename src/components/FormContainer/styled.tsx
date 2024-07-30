import styled from "styled-components";

export const FormStyled = styled.form`
  background-color: ${(props) => props.theme.colors.black};
  width: 90%;
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  border-radius: ${(props) => props.theme.sizes.xs};
  padding: ${(props) => props.theme.sizes.md};

  @media (min-width: 540px) {
    width: 486px;
  }
`;

export const HeaderForm = styled.header`
  width: 100%;
  display: grid;
  place-items: center;

  img {
    width: 10rem;
    object-fit: contain;
  }
`;
