"use strict";

module.exports = (app) => {

  app.use((req, res, next) => {
    let error = new Error("Page not found");
    error.status = 404;
    next(error);
  });

  app.use((err, req, res, next) => {
    err.status = err.status || 500;
    res.send({ error: `${ err.status } ${ err.message }` });
  });
};
