import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { deepOrange, indigo } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: deepOrange,
  },
  typography:{
    h1:{
      fontFamily: ["Comfortaa", "cursive"].join(","),
      fontSize: "4rem",
    },
    h2: {
      fontFamily: ["Comfortaa", "cursive"].join(","),
      fontSize: "2rem",
    },
    h3: {
      fontFamily: ["Comfortaa", "cursive"].join(","),
      fontSize: "1.75rem",
    }

  }
  
})
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
