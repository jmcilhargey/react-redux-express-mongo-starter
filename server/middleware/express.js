import express from "express";
import compression from "compression";
import bodyParser from "body-parser";
import helmet from "helmet";

module.exports = function (app, passport) {

  app.use(compression());
  app.use(helmet());

  app.use(bodyParser.urlencoded({
    extended: true,
    limit: "20mb"
  }));
  app.use(bodyParser.json({ limit: "20mb" }));

  app.use(passport.initialize());
  app.use(passport.session());
}
