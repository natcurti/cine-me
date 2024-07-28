import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProviderTheme from "./components/ThemeProvider";
import Home from "./pages/Home";
import GlobalStyle from "./components/GlobalStyle";
import { MoviesProvider } from "./context/moviesContext";
import DefaultPage from "./pages/DefaultPage";
import { TvShowProvider } from "./context/tvShowContext";

function App() {
  return (
    <BrowserRouter>
      <ProviderTheme>
        <GlobalStyle />
        <MoviesProvider>
          <TvShowProvider>
            <Routes>
              <Route path="/" element={<DefaultPage />}>
                <Route index element={<Home />} />
              </Route>
            </Routes>
          </TvShowProvider>
        </MoviesProvider>
      </ProviderTheme>
    </BrowserRouter>
  );
}

export default App;
