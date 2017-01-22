"use strict";

const bcrypt = require("bcrypt");
const crypto = require("crypto");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    trim: true
  },
  username: {
    type: String,
    unique: true,
    trim: true
  },
  password: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  counter: {
    type: Number,
    default: 0
  },
  github: {
    id: {
      type: String
    },
    displayName: {
      type: String
    },
    username: {
      type: String,
      unique: true
    },
    publicRepos: {
      type: Number
    },
    accessToken: {
      type: String
    }
  }
});

UserSchema.statics.authenticate = function (username, password, callback) {

 User.findOne({ username: username })
   .exec((error, user) => {
     if (error) {
       return callback(error);
     }
     if (!user) {
       let error = new Error("User not found");
       error.status = 401;
       return callback(error);
     }

     bcrypt.compare(password, user.password, function (error, match) {
       if (match) {
         return callback(null, user);
       } else if (error) {
         return next(error);
       } else {
         let error = new Error("Credentials don't match");
         error.status = 401;
         return callback(error);
       }
     });
   });
};

UserSchema.pre("save", function (next) {

 const user = this;
 if (!user.isModified("password")) {
   return next();
 }
 bcrypt.genSalt(10, function (error, salt) {
   bcrypt.hash(user.password, salt, function (error, hash) {
     if (error) {
       return next(error);
     }
     user.password = hash;
     next();
   });
 });
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
