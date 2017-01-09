module.exports = {
  mongoUri: process.env.MONGO_URI || "mongodb://localhost:27017/test",
  jwtSecret: process.env.JWT_SECRET || "secret",
  github: {
    id: process.env.GITHUB_ID || "github_id",
    secret: process.env.GITHUB_SECRET || "github_secret",
  }
};
