import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import App from "./components/App";

// To use the object theme we need to wrap our app in it (like we did wit BrowserRouter), use ThemeProvider
const theme = createTheme({});

ReactDOM.render(
  // ThemeProvider takes in a theme which is equal to theme
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
);
