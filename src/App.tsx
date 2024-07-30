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

function App() {
  return (
    <BrowserRouter>
      <ProviderTheme>
        <GlobalStyle />
        <MoviesProvider>
          <TvShowProvider>
            <UpcomingProvider>
              <Routes>
                <Route path="/" element={<DefaultPage />}>
                  <Route index element={<Home />} />
                </Route>
                <Route path="/cadastro" element={<Register />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </UpcomingProvider>
          </TvShowProvider>
        </MoviesProvider>
      </ProviderTheme>
    </BrowserRouter>
  );
}

export default App;
