import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const ProviderTheme = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ProviderTheme;
