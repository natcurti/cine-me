import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProviderTheme from "./components/ThemeProvider";
import Home from "./pages/Home";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ProviderTheme>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </ProviderTheme>
    </BrowserRouter>
  );
}

export default App;
