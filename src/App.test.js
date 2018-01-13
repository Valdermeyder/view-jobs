import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {MuiThemeProvider} from "material-ui";

it('renders without crashing', () => {
  const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><MuiThemeProvider><App /></MuiThemeProvider></BrowserRouter>, div);
});
