import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "bulma/css/bulma.css";
import "./styles.scss";

// Redux Setup
import { Provider } from "react-redux";
import { createStore } from "redux";
import { carSalesReducer } from "./reducers";

// Redux Tools

// created Store
const store = createStore(
  carSalesReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
