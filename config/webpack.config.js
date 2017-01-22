const argv = require("minimist");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const project = require("./project.config");

const config = {
  name: "client",
  target: "web",
  devtool: project.compiler.devtool,
  resolve: {
    root: project.paths.client(),
    extensions: ["", ".js", ".jsx", ".json", ".css"]
  },
  module: {}
};

if (project.env === "development") {
  config.entry = {
    app: [
      "react-hot-loader/patch",
      "webpack-hot-middleware/client",
      project.paths.client("index.js")
    ]
  };
}

if (project.env === "build") {
  config.entry = {
    app: project.paths.client("index.js"),
    vendor: project.compiler.vendors
  };
}

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

if (project.env === "development") {
  config.plugins = [
    new webpack.DefinePlugin(project.env),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new HtmlWebpackPlugin({
      template: project.paths.client("index.html"),
      hash: false,
      favicon: project.paths.public("favicon.ico"),
      filename: "index.html",
      inject: "body",
    })
  ];
}

if (project.env === "build") {
  config.plugins = [
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      children: true,
      minChunks: 2,
      async: true,
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
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
}

config.module.loaders = [];

config.module.loaders.push({
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  loader: "babel",
  query: project.compiler.babel
});

if (project.env === "development") {
  config.module.loaders.push({
    test: /\.css$/,
    exclude: null,
    include: project.paths.client(),
    loader: "style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]"
  });
}

if (project.env === "build") {
  config.module.loaders.push({
    test: /\.css$/,
    exclude: null,
    loader: ExtractTextPlugin.extract("style-loader", "css?modules=true&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]")
  });
}

config.module.loaders.push(
  { test: /\.svg(\?.*)?$/, loader: "url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml" },
  { test: /\.(png|jpg)$/, loader: "url-loader?limit=10000" }
);

module.exports = config;
