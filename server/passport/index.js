"use strict";

const User = require("../models/User");
const GitHubStrategy = require("passport-github").Strategy;
const project = require("../../config/project.config");
const server = require("../../config/server.config");

module.exports = function(passport) {

  passport.use(new GitHubStrategy({
    clientID: server.github.id,
    clientSecret: server.github.secret,
    callbackURL: `http://${ project.ip }:${ project.port }/auth/github/callback`
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOne({ "github.id": profile.id }, function (err, user) {
      if (err) {
        return cb(err);
      }
      if (!user) {
        let user = new User({
          github: {
            displayName: profile.displayName,
            username: profile.username,
            publicRepos: profile._json.public_repos,
            accessToken: accessToken,
          }
        });
        user.save((err, user) => {
          if (err) {
            return cb(err);
          }
          return cb(null, user);
        });
      } else {
        return cb(null, user);
      }
    });
  }));

  passport.serializeUser(function(user, cb) {
    cb(null, user);
  });

  passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
  });
}
