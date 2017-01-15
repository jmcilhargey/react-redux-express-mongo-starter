import express from "express";
import path from "path";
import React from "react";
import { renderToString } from "react/dist/react.min";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../../src/reducers"
import { match, RouterContext } from "react-router";
import renderPage from "../utils/render";

const addDevMiddleware = (app, webpackConfig) => {
  const webpack = require("webpack");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");
  const compiler = webpack(webpackConfig);
  const middleware = webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    silent: true,
    stats: "errors-only",
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));

  const fs = middleware.fileSystem;

  app.get("*", (req, res) => {
    fs.readFile(path.join(compiler.outputPath, "index.html"), (err, file) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(file.toString());
      }
    });
  });
};

const addProdMiddleware = (app, options) => {
  const publicPath = options.publicPath || "/";
  const outputPath = options.outputPath || path.resolve(process.cwd(), "build")
  const hook = require("css-modules-require-hook");
  hook({
    generateScopedName: "[name]__[local]___[hash:base64:5]",
    extensions: [".css"]
  });
  const routes = require("../../src/routes").default;
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
};

module.exports = (app, options) => {

  if (process.env.NODE_ENV === "production") {
    addProdMiddleware(app, options);
  } else {
    const webpackConfig = require("../../config/webpack.config");
    addDevMiddleware(app, webpackConfig);
  }
  return app;
};
