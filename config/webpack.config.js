const path = require("path");
const argv = require("minimist");
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const project = require("./project.config");

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

config.entry = {
  app: project.paths.client("main.js"),
  vendor: project.compiler.vendors
};

config.output = {
  filename: "[name].js",
  chunkFileName: "[name].chunk.js",
  path: project.paths.build(),
  publicPath: project.compiler.path
};

config.externals = {
  "react/lib/ExecutionEnvironment": true,
  "react/lib/ReactContext": true,
  "react/addons": true
};

config.plugins = [
  new webpack.DefinePlugin(project.globals),
  new webpack.optimize.CommonsChunkPlugin({
    name: "vendor",
    children: true,
    minChunks: 2,
    async: true,
  }),
  new webpack.optimize.DedupePlugin(),
  new HtmlWebpackPlugin({
    template: project.paths.client("index.html"),
    hash: false,
    favicon: project.paths.public("favicon.ico"),
    filename: "index.html",
    inject: "body",
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true
    }
  }),
  new ExtractTextPlugin("styles.css")
];

config.module.loaders = [];

config.module.loaders.push({
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  loader: "babel",
  query: project.compiler.babel
});

if (process.env.NODE_ENV === "development") {
  config.module.loaders.push({
    test: /\.css$/,
    exclude: null,
    include: project.paths.client(),
    loaders: [
      "style?sourceMap",
      "css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]"
    ]
  });
}

if (process.env.NODE_ENV === "build") {
  config.module.loaders.push({
    test: /\.css$/,
    exclude: null,
    loader: ExtractTextPlugin.extract("style-loader", "css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]")
  });
}

config.module.loaders.push(
  { test: /\.svg(\?.*)?$/, loader: "url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml" },
  { test: /\.(png|jpg)$/, loader: "url?limit=8192" }
);

module.exports = config;
