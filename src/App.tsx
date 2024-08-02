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
                    <Routes>
                      <Route path="/" element={<DefaultPage />}>
                        <Route index element={<Home />} />
                        <Route
                          path="/filmes/:id"
                          element={<StreamingDetails />}
                        />
                        <Route
                          path="/series/:id"
                          element={<StreamingDetails />}
                        />
                      </Route>
                      <Route path="/cadastro" element={<Register />} />
                      <Route path="/login" element={<Login />} />
                    </Routes>
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
