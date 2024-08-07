import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProviderTheme from "./components/ThemeProvider";
import Home from "./pages/Home";
import GlobalStyle from "./components/GlobalStyle";
import { MoviesProvider } from "./context/moviesContext";
import DefaultPage from "./pages/DefaultPage";
import { TvShowProvider } from "./context/tvShowContext";
import { UpcomingProvider } from "./context/upcomingContext";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { UserContextProvider } from "./context/userContext";
import { SessionProvider } from "./context/sessionContext";
import GenreProvider from "./context/genreContext";
import StreamingDetails from "./pages/StreamingDetails";
import NotFound from "./pages/NotFound";
import ListItems from "./pages/ListItems";
import SearchPage from "./pages/Search";
import { SearchProvider } from "./context/searchContext";

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
                          <Route path="/resultados" element={<SearchPage />} />
                          <Route path="*" element={<NotFound />} />
                        </Route>
                        <Route path="/cadastro" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                      </Routes>
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
