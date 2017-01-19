import express from "express";
import mongoose from "mongoose";
import passport from "passport";
import path from "path";
import logger from "./utils/logger";
import argv from "minimist";
import server from "../config/server.config";
import project from "../config/project.config";
import errors from "./utils/errors";

const app = express();
const db = connect();

require("./passport")(passport);
require("./middleware/express")(app, passport);

const routes = require("./routes")(app, passport);
app.use("/api", routes);

if (project.env === "production") {
  require("./middleware/prod")(app, { outputPath: path.resolve(process.cwd(), "build"), publicPath: "/" });
} else {
  require("./middleware/dev")(app);
}

errors(app);

app.listen(project.port, (err) => {
  if (err) {
    return logger.error(err.message);
  }
  logger.started(project.port, project.ip);
});

function connect() {
  const options = { server: { socketOptions: { keepAlive: 1 } } };
  const db = mongoose.connect(server.mongoUri, options).connection;
  db.on("error", (err) => logger.error(err));
  db.on("open", () => logger.connected(server.mongoUri));
  return db;
}
