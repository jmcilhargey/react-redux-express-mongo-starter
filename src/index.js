import "babel-polyfill";
import "isomorphic-fetch";
import React from "react";
import ReactDOM from "react-dom";
import { syncHistoryWithStore } from "react-router-redux";
import { AppContainer } from "react-hot-loader";

import store from "./store";
import routes from "./routes";
import Root from "./Root";

require("./main.css");
// console.log(window.__PRELOADED_STATE__);

const render = (Root) => {
  ReactDOM.render(
    <AppContainer>
      <Root store={ store } />
    </AppContainer>,
    document.getElementById("root")
  );
};

render(Root);

if (module.hot) {
  module.hot.accept("./Root", () => {
    const NextRoot = require("./Root").default;
    render(NextRoot);
  });
}
