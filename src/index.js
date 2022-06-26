import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createClient, Provider } from 'urql';
import './index.css';




const client = createClient({
  url: 'https://api.devcdc.com/cricket',
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider value={client}>
    <App />
  </Provider>,
  rootElement
);

  