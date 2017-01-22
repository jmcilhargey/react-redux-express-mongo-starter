import express from "express";
import path from "path";
import React from "react";
import { renderToString } from "react-dom/server";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise";
import { Provider } from "react-redux";
import rootReducer from "../../src/reducers"
import { match, RouterContext } from "react-router";
import renderPage from "../utils/render";
import hook from "css-modules-require-hook";

module.exports = (app, options) => {
  const publicPath = options.publicPath || "/";
  const outputPath = options.outputPath || path.resolve(process.cwd(), "build");
  hook({
    generateScopedName: "[name]__[local]___[hash:base64:5]",
    extensions: [".css"]
  });
  const routes = require("../../src/routes").default;
  const store = createStore(rootReducer, applyMiddleware(thunk, promise));
  // const injectProps = child => React.cloneElement(child, addProps);

  app.use(publicPath, express.static(outputPath));

  app.get("*", (req, res, next) => {
    match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
        if (err) {
          return next(err);
        }
        if (redirectLocation) {
          return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        }
        let html = null;

        const getRouteProps = () => {
          return new Promise((resolve, reject) => {
            const routeContainer = renderProps.components[renderProps.components.length - 1].WrappedComponent;
            if (routeContainer && routeContainer.fetchData) {
              return resolve(routeContainer.fetchData({ store }));
            } else {
              return resolve();
            }
          });
        }

        if (renderProps) {
          getRouteProps().then(() => {
            html = renderToString(
              <Provider store={ store }>
                <RouterContext { ...renderProps } />
              </Provider>
            );
            const preloadedState = store.getState();
            res.send(renderPage(html, preloadedState));
          }).catch((err) => {
            return next(err);
          })
        }
      }
    );
  });
}
