import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import App from "./App";
import './assets/defaultStyle.css'
import {theme} from './assets/defaultStyle'

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
