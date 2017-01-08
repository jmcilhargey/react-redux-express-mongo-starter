const path = require("path");
const argv = require("minimist");

const config = {
  env: process.env.NODE_ENV || "development",
  host: "localhost",
  port: process.env.PORT || 3000,
  base: path.resolve(__dirname, "..")
};

config.compiler = {
  devtool: "source-map",
  hash: "hash",
  path: "/",
  vendors: [
    "react",
    "react-redux",
    "react-router",
    "redux"
  ],
  quiet: false,
  fail: false,
  babel: {
    cacheDirectory: true,
    plugins: ["transform-runtime"],
    presets: ["es2015", "react", "stage-0"]
  },
  stats: {
    chunks : false,
    chunkModules : false,
    colors : true
  }
};

function base () {
  const args = [config.base].concat([].slice.call(arguments));
  return path.resolve.apply(path, args);
}

config.paths = {
  client: base.bind(null, "src"),
  public: base.bind(null, "public"),
  build: base.bind(null, "build")
};

config.globals = {
  "process.env": {
    "NODE_ENV": JSON.stringify(config.env)
  },
  "ENV": config.env,
  "DEV": config.env === "development",
  "PROD": config.env === "production",
  "TEST": config.env === "test"
};

module.exports = config;
