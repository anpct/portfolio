import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    primary: string;
    secondary: string;
    background: string;
    primaryText: string;
    secondaryText: string;
    navbar: string;
    footer: string;
    loadingBackground: string;
    gradientBackground: string;
    border: string;
    outOfFocus: string;
    error: string;
    success: string;
    boxShadow: string;
    taskbar: string;
    hover: string;
  }
}
