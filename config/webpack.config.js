const path = require("path");
const debug = require("debug")("app:config:webpack");
const argv = require("yargs").argv;
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const cssnano = require("cssnano");
const project = require("./project.config");

debug("Creating webpack configuration..");

const config = {
  name: "client",
  target: "web",
  devtool: project.compiler.devtool,
  resolve: {
    root: project.paths.client(),
    extensions: ["", ".js", ".jsx", ".json"]
  },
  module: {}
}

const entry = project.paths.client("main.js");

config.entry = {
  app: project.globals.dev
  ? entry.concat(`webpack-hot-middleware/client?path=${ project.compiler.path }__webpack_hmr`)
  : entry,
  vendor: project.compiler.vendors
};

config.output = {
  filename: `[name].[${ project.compiler.hash }].js`,
  path: project.paths.dist(),
  publicPath: project.compiler.path
};

config.externals = {
    "react/lib/ExecutionEnvironment": true,
    "react/lib/ReactContext": true,
    "react/addons": true
};

config.plugins = [
  new webpack.DefinePlugin(project.globals),
  new HtmlWebpackPlugin({
    template: project.paths.client("index.html"),
    hash: false,
    favicon: project.paths.public("favicon.ico"),
    filename: "index.html",
    inject: "body",
    minify: {
      collapseWhitespace : true
    }
  })
];

config.module.loaders = [];

config.module.loaders.push({
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  loader: "babel",
  query: project.compiler.babel
});

config.module.loaders.push({
  test: /\.css$/,
  exclude: null,
  loaders: [
    "style",
    "css?sourceMap&-minimize",
    "postcss"
  ]
});

config.postcss = [
  cssnano({
    autoprefixer: {
      add: true,
      remove: true,
      browsers : ["last 2 versions"]
    },
    discardComments : {
      removeAll: true
    },
    discardUnused: false,
    mergeIdents: false,
    reduceIdents: false,
    safe: true,
    sourcemap: true
  })
];

config.module.loaders.push(
  { test: /\.svg(\?.*)?$/, loader: "url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml" },
  { test: /\.(png|jpg)$/, loader: "url?limit=8192" }
);

module.exports = config;
