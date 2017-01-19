import express from "express";
import path from "path";
import React from "react";
import { renderToString } from "react-dom/server";
import { createStore } from "redux";
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
  const routes = require("../../src/routes");
  const store = createStore(rootReducer);

  app.use(publicPath, express.static(outputPath));

  app.get("*", (req, res, next) => {
    match(
      { routes, location: req.url },
      (err, redirectLocation, renderProps) => {
        if (err) {
          return next(err);
        }

        if (redirectLocation) {
          return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        }
        let html = null;
        if (renderProps) {
          html = renderToString(<RouterContext { ...renderProps } />);
        }
        const preloadedState = store.getState();

        res.send(renderPage(html, preloadedState));
      }
    );
  });
}
