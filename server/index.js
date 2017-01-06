const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const logger = require("./utils/logger");
const argv = require("minimist");
const config = require("../config/server.config");
const setup = require("./middleware/setup");
const passport = require("passport");

const app = express();
const connection = connect();

require("./passport")(app);
require("./express")(app, passport);
const routes = require('./routes')(app, passport);

app.use("/api", routes);

setup(app, {
  outputPath: path.resolve(process.cwd(), "build"),
  publicPath: '/',
});

app.listen(config.port, (err) => {
  if (err) {
    return logger.error(err.message);
  }
  logger.appStarted(config.port);
});

function connect () {
  var options = { server: { socketOptions: { keepAlive: 1 } } };
  var connection = mongoose.connect(config.uri, options).connection;
  return connection;
}
