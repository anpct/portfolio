import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/Theme";
import GlobalStyles from "../styles/GlobalStyles";
import Layout from "../layout/Layout";

const { lightTheme, darkTheme } = theme;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  );
};

export default App;
