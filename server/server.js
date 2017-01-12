import express from "express";
import mongoose from "mongoose";
import passport from "passport";
import path from "path";
import logger from "./utils/logger";
import argv from "minimist";
import server from "../config/server.config";
import project from "../config/project.config";
import setup from "./middleware/setup";
import errors from "./utils/errors";

const app = express();
const connection = connect();

require("./passport")(passport);
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
  const connection = mongoose.connect(server.mongoUri, options).connection;
  return connection;
}
