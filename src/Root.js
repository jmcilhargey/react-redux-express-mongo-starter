import React from "react";
import { Router, browserHistory } from "react-router";
import { Provider } from "react-redux";
import routes from "./routes";

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ browserHistory } routes={ routes } onUpdate={ () => window.scrollTo(0, 0) } />
  </Provider>
);

export default Root;
