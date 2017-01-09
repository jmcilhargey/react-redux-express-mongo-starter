const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const path = require("path");
const logger = require("./utils/logger");
const argv = require("minimist");
const server = require("../config/server.config");
const project = require("../config/project.config");
const setup = require("./middleware/setup");
const errors = require("./utils/errors");

const app = express();
const connection = connect();

require("./passport")(app);
require("./middleware/express")(app, passport);

const routes = require('./routes')(app, passport);
app.use("/api", routes);

setup(app, {
  outputPath: path.resolve(process.cwd(), "build"),
  publicPath: '/',
});

errors(app);

app.listen(project.port, (err) => {
  if (err) {
    return logger.error(err.message);
  }
  logger.started(project.port, project.ip);
});

function connect() {
  const options = { server: { socketOptions: { keepAlive: 1 } } };
  const connection = mongoose.connect(server.uri, options).connection;
  return connection;
}
