module.exports = {
  uri: process.env.MONGO_URI || "mongodb://localhost:27017/test",
  port: process.env.PORT || 3000,
  secret: process.env.SECRET || "secret"
};
