"use strict";

import { isLoggedIn, isLoggedOut } from "../middleware/login";
import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();
const server = require("../../config/server.config");
const User = require("../models/User");

router.post("/register", isLoggedOut, (req, res, next) => {

  const user = req.body;

  if (!user.username || !user.email || !user.password) {
    let error = new Error("Username, email, and password required");
    error.status = 400;
    return next(error);
  }
  if (user.password !== user.confirm) {
    let error = new Error("Passwords must match");
    error.status = 400;
    return next(error);
  }

  let newUser = {
    email: user.email,
    username: user.username,
    password: user.password
  };

  Users.create(newUser, (error, user) => {
    if (error) {
      return next(error);
    }
    res.status(200).json({ message: `Success, you're registered ${ user.username }` });
  });
});

router.get("/login", isLoggedOut, (req, res, next) => {

  const encoded = req.headers["authorization"].split(" ")[1];
  const decoded = new Buffer(encoded, "base64").toString("utf8").split(":");

  Users.authenticate(decoded[0], decoded[1], (error, user) => {
    if (error || !user) {
      res.json({ error: "Invalid username or password" })
    } else {

      jwt.sign({ username: user.username, id: user._id }, server.jwtSecret, { algorithm: "HS256", expiresIn: "1d"}, (error, token) => {
        if (error) {
          return next(error);
        }
        res.status(200).json({ token: token, message: `Success, you're logged in ${ user.username }` });
      });
    }
  });
});

router.get("/logout", isLoggedIn, (req, res, next) => {

  if (req.decoded) {
    req.decoded = null;
  }
  res.status(200).json({ message: "You've logged out" });
});


module.exports = router;
