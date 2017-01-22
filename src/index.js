import "babel-polyfill";
import "isomorphic-fetch";
import React from "react";
import ReactDOM from "react-dom";
import { syncHistoryWithStore } from "react-router-redux";
import { Router, browserHistory } from "react-router";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import promise from "redux-promise";
import routes from "./routes";
import { loadState, saveState } from "./utils/localStorage";
import throttle from "lodash/throttle";
require("./main.css");

// Can use localStorage to persist state as well
const persistedState = loadState();
const preloadedState = window.__PRELOADED_STATE__;

let store = createStore(rootReducer, preloadedState, applyMiddleware(thunk, promise));
let history = syncHistoryWithStore(browserHistory, store);

store.subscribe(throttle(() => {
  saveState(store.getState());
}, 1500));

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history } routes={ routes } onUpdate={ () => window.scrollTo(0, 0) } />
  </Provider>,
  document.getElementById("root")
);

// Not working properly with React Router: https://github.com/gaearon/react-hot-loader/issues/249
/*
import { AppContainer } from "react-hot-loader";
if (module.hot) {
  module.hot.accept(Root, () => {
    ReactDOM.render(
      <AppContainer>
        <Root store={ store } />
      </AppContainer>,
      document.getElementById("root")
    );
  });
}
*/
