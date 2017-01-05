import "babel-polyfill";
import "isomorphic-fetch";
import React from "react";
import ReactDOM from "react-dom";
import { Router, browserHistory } from "react-router";
import { Provider } from "react-redux";
import { syncHistoryWithStore } from "react-router-redux";
import store from "./store";
import routes from "./routes";

import App from "./containers/App";

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ browserHistory } routes={ routes } />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById("root"));
