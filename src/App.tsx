import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProviderTheme from "./components/ThemeProvider";
import Home from "./pages/Home";
import GlobalStyle from "./components/GlobalStyle";
import { MoviesProvider } from "./context/moviesContext";

function App() {
  return (
    <BrowserRouter>
      <ProviderTheme>
        <GlobalStyle />
        <MoviesProvider>
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </MoviesProvider>
      </ProviderTheme>
    </BrowserRouter>
  );
}

export default App;
