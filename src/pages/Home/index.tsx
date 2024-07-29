import HeaderContainer from "src/components/HeaderContainer";
import Section from "src/components/Section";
import Typography from "src/components/Typography";
import { useMoviesContext, useTvShowContext } from "src/hooks/custom";
import { MainStyled } from "./styled";
import Spinner from "src/components/Spinner";

const Home = () => {
  const {
    popularMovies,
    isLoading: isLoadingMovies,
    error: errorMovies,
  } = useMoviesContext();
  const {
    popularTvShow,
    isLoading: isLoadingTvShow,
    error: errorTvShow,
  } = useTvShowContext();

  return (
    <>
      <HeaderContainer />
      <MainStyled>
        {isLoadingMovies || isLoadingTvShow ? (
          <Spinner />
        ) : (
          <>
            <Section items={popularMovies}>
              <Typography element="h3" variant="h3">
                Filmes mais populares
              </Typography>
              {errorMovies && (
                <Typography element="p1" variant="p">
                  Não foi possível carregar a lista de filmes. Tente novamente
                </Typography>
              )}
            </Section>
            <Section items={popularTvShow}>
              <Typography element="h3" variant="h3">
                Séries para você
              </Typography>
              {errorTvShow && (
                <Typography element="p1" variant="p">
                  Não foi possível carregar a lista de séries. Tente novamente
                </Typography>
              )}
            </Section>
          </>
        )}
      </MainStyled>
    </>
  );
};

export default Home;
