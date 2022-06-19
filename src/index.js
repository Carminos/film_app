import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// Provider component wraps the whole app
// import { Provider} from 'react-redux';


import App from "./components/App";

// To use the object theme we need to wrap our app in it (like we did wit BrowserRouter), use ThemeProvider
const theme = createTheme({});

ReactDOM.render(
  // Provider has a variable 'store' which is our entire state. It needs to be accessible to every component inside the app
  // <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>,
  // </Provider>,
  document.getElementById("root")
);
