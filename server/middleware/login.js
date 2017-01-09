"use strict";

const jwt = require("jsonwebtoken");
const server = require("../../config/server.config");

module.exports = {

  isLoggedOut: function(req, res, next) {
    if (req.decoded) {
      res.status(301).redirect("/");
    }
    return next();
  },
  isLoggedIn: function(req, res, next) {
    const token = req.headers["x-access-token"] || req.body.token;
    if (token) {
      jwt.verify(token, server.jwtSecret, (error, decoded) => {
        if (error) {
          return next(error);
        }
        req.decoded = decoded;
        return next();
      });
    } else {
      let error = new Error("Must be logged in to view");
      error.status = 403;
      return next(error);
    }
  }
}
