import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { GlobalStateProvider } from "./state/GlobalState";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStateProvider>
      <App />
    </GlobalStateProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
