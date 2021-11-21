import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/Theme";
import GlobalStyles from "../styles/GlobalStyles";
import Layout from "../layout/Layout";
import { useContext } from "react";
import { GlobalState } from "../state/GlobalState";

const { lightTheme, darkTheme } = theme;

const App: React.FC = () => {
  const { state } = useContext(GlobalState);
  return (
    <ThemeProvider theme={state.theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  );
};

export default App;
