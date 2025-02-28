import { ReactNode } from "react";
import { ThemeProvider, type DefaultTheme } from "styled-components";
import GlobalStyle from "./GlobalStyles";

const theme: DefaultTheme = {
  colors: {
    primary: "#111",
    secondary: "#0070f3",
  },
};

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
