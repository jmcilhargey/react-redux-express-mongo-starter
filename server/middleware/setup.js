const express = require("express");
const path = require("path");
const compression = require("compression");

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

  app.get('*', (req, res) => {
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
  const outputPath = options.outputPath || path.resolve(process.cwd(), "build");

  app.use(compression());
  app.use(publicPath, express.static(outputPath));
  app.get("*", (req, res) => res.sendFile(path.resolve(outputPath, "index.html")));
};

module.exports = (app, options) => {
  const isProd = process.env.NODE_ENV === "production";

  if (isProd) {
    addProdMiddleware(app, options);
  } else {
    const webpackConfig = require("../../config/webpack.config");
    addDevMiddleware(app, webpackConfig);
  }
  return app;
};
