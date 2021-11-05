import { DefaultTheme } from "styled-components";

const darkTheme: DefaultTheme = {
  primary: "#dc6180",
  secondary: "#009698",
  background: "rgb(30, 30, 30)",
  primaryText: "#F5DFEE",
  secondaryText: "#D5D7DF",
  navbar: "#000000",
  footer: "#000000",
  loadingBackground: "Shade",
  gradientBackground:
    "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);",
  border: "#393d52",
  outOfFocus: "rgb(0,0,0,0.85)",
  error: "#ea5c54",
  success: "#90EE90",
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px;",
  taskbar: "rgb(30, 30, 30)",
  hover: "rgb(255,255,255,0.1)",
};

const lightTheme: DefaultTheme = {
  primary: "#dc6180",
  secondary: "#009698",
  background: "#fff",
  primaryText: "#333",
  secondaryText: "#D5D7DF",
  navbar: "#000000",
  footer: "#000000",
  loadingBackground: "Shade",
  gradientBackground:
    "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);",
  border: "#393d52",
  outOfFocus: "rgb(0,0,0,0.85)",
  error: "#ea5c54",
  success: "#90EE90",
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px;",
  taskbar: "#fff",
  hover: "rgb(1,1,1,0.2)",
};

export default { darkTheme, lightTheme };
