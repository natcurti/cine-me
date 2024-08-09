import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProviderTheme from "./components/ThemeProvider";
import GlobalStyle from "./components/GlobalStyle";
import { MoviesProvider } from "./context/moviesContext";
import { TvShowProvider } from "./context/tvShowContext";
import { UpcomingProvider } from "./context/upcomingContext";
import { UserContextProvider } from "./context/userContext";
import { SessionProvider } from "./context/sessionContext";
import GenreProvider from "./context/genreContext";
import { SearchProvider } from "./context/searchContext";
import { lazy, Suspense } from "react";
import Spinner from "./components/Spinner";

const DefaultPage = lazy(() => import("./pages/DefaultPage"));
const Home = lazy(() => import("./pages/Home"));
const ListItems = lazy(() => import("./pages/ListItems"));
const StreamingDetails = lazy(() => import("./pages/StreamingDetails"));
const SearchPage = lazy(() => import("./pages/Search"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));

function App() {
  return (
    <BrowserRouter>
      <ProviderTheme>
        <GlobalStyle />
        <MoviesProvider>
          <TvShowProvider>
            <UpcomingProvider>
              <UserContextProvider>
                <SessionProvider>
                  <GenreProvider>
                    <SearchProvider>
                      <Suspense fallback={<Spinner />}>
                        <Routes>
                          <Route path="/" element={<DefaultPage />}>
                            <Route index element={<Home />} />
                            <Route path="/filmes" element={<ListItems />} />
                            <Route path="/series" element={<ListItems />} />
                            <Route
                              path="/filmes/:id"
                              element={<StreamingDetails />}
                            />
                            <Route
                              path="/series/:id"
                              element={<StreamingDetails />}
                            />
                            <Route
                              path="/resultados"
                              element={<SearchPage />}
                            />
                            <Route path="*" element={<NotFound />} />
                          </Route>
                          <Route path="/cadastro" element={<Register />} />
                          <Route path="/login" element={<Login />} />
                        </Routes>
                      </Suspense>
                    </SearchProvider>
                  </GenreProvider>
                </SessionProvider>
              </UserContextProvider>
            </UpcomingProvider>
          </TvShowProvider>
        </MoviesProvider>
      </ProviderTheme>
    </BrowserRouter>
  );
}

export default App;
