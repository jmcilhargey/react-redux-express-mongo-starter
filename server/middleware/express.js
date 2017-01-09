const express = require("express");
const compression = require("compression");
const bodyParser = require("body-parser");
const helmet = require("helmet");

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
