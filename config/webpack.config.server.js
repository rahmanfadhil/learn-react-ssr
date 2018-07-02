const nodeExternals = require("webpack-node-externals");
const path = require("path");

module.exports = {
  entry: "./server/index.js",
  output: {
    filename: "server.bundle.js",
    path: path.resolve(__dirname, "../dist")
  },
  node: {
    __dirname: true,
    __filename: true
  },
  target: "node",
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          presets: ["es2015", "react"]
        }
      }
    ]
  }
};
