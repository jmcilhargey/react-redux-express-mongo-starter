const express = require("express");
const userRoutes = require("./user.routes");
const authRoutes = require("./auth.routes");

const router = express.Router();

module.exports = function(app, passport) {
  router.get("/test", (req, res) => {
    res.send("OK");
  });

  router.use("/user", userRoutes);
  router.use("/auth", authRoutes);
  return router;
}
