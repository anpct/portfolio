import { normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
${normalize}
* {
  box-sizing: border-box;
}
html,
body,
#root {
  padding: 0;
  margin: 0;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.primaryText};
  overflow-x: hidden;
  height: 100%;
  width: 100%;
  font-weight: lighter;
  overflow: hidden;
}
a {
  color: inherit;
  text-decoration: none;
  font-weight: lighter;
}
::-webkit-scrollbar {
  width: 2px;
  height: 2px;
}
::-webkit-scrollbar-track {
  background: ${(props) => props.theme.background}; 
}
 
::-webkit-scrollbar-thumb {
  background: ${(props) => props.theme.primary}; 
}
::-webkit-scrollbar-thumb:hover {
  background:${(props) => props.theme.primary}; 
}
@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
path { fill: ${(props) => props.theme.primaryText}; }
`;

export default GlobalStyles;
