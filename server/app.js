const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const debug = require("debug")("app:server");
const compress = require("compression");
const path = require("path");
const webpack = require("webpack");
const httpProxy = require("http-proxy");

const project = require("../config/project.config");
const webpackConfig = require("../config/webpack.config");
const serverConfig = require("../config/server.config");

const app = express();
const url = `http://${ project.host }:${ project.port }`;
const proxy = httpProxy.createProxyServer({
  target: url,
  ws: true
});

mongoose.Promise = global.Promise;
mongoose.connect = process

app.use(compress());

if (project.env === "development") {
  const compiler = webpack(webpackConfig);

  app.use(require("webpack-dev-middleware")(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: project.paths.client(),
    hot: true,
    quiet: false,
    noInfo: false,
    lazy: false,
    stats: project.compiler.stats
  }));

  app.use(require("webpack-hot-middleware")(compiler, {
    path: "/__webpack_hmr"
  }));

  app.use(express.static(project.paths.public()));

  app.use("/api", (req, res) => {
    proxy.web(req, res, { target: url });
  });

  app.use("*", function(req, res, next) {
    const filename = path.join(compiler.outputPath, "index.html");
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) {
        return next(err);
      }
      res.set("content-type", "text/html");
      res.send(result);
      res.end();
    });
  });
}

app.listen(project.port, (err) => {
  if (err) {
    return next(err);
  }
  debug(`${ project.name } listening on port ${ project.port }`);
});
