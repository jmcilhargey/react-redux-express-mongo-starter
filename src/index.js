import "babel-polyfill";
import "isomorphic-fetch";
import React from "react";
import ReactDOM from "react-dom";
import { syncHistoryWithStore } from "react-router-redux";
import { AppContainer } from "react-hot-loader";
import { Router, browserHistory } from "react-router";
import { Provider } from "react-redux";

import store from "./store";
import routes from "./routes";

require("./main.css");
// console.log(window.__PRELOADED_STATE__);

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ browserHistory } routes={ routes } onUpdate={ () => window.scrollTo(0, 0) } />
  </Provider>
);

const render = (Root) => {
  ReactDOM.render(
    <AppContainer>
      <Root store={ store } />
    </AppContainer>,
    document.getElementById("root")
  );
};

render(Root);

// Not working properly with React Router yet: https://github.com/gaearon/react-hot-loader/issues/249
if (module.hot) {
  module.hot.accept(Root, () => {
    render(Root);
  });
}
