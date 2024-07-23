import styled from "styled-components";

const StyledTitle = styled.h1`
  color: ${(props) => props.theme.colors.red};
`;

const Home = () => {
  return <StyledTitle>Olá!</StyledTitle>;
};

export default Home;
