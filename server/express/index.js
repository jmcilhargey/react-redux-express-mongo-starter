
const express = require("express");
const session = require("express-session");
const compression = require("compression");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const mongoStore = require("connect-mongo")(session);
const config = require("../../config/server.config");

module.exports = function (app, passport) {

  app.use(compression());

  app.use(bodyParser.urlencoded({
    extended: true,
    limit: "20mb"
  }));
  app.use(bodyParser.json({ limit: "20mb" }));

  app.use(cookieParser());
  app.use(cookieSession({ secret: config.secret }));
  app.use(session({
    secret: config.secret,
    proxy: true,
    resave: true,
    saveUninitialized: true,
    store: new mongoStore({
      url: config.uri,
      collection : "sessions"
    })
  }));

  app.use(passport.initialize());
  app.use(passport.session());
}
