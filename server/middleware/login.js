"use strict";

import jwt from "jsonwebtoken";
import server from "../../config/server.config";

const isLoggedOut = (req, res, next) => {
  if (req.decoded) {
    res.status(301).redirect("/");
  }
  return next();
};

const isLoggedIn = (req, res, next) => {
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
};

export { isLoggedIn, isLoggedOut }
