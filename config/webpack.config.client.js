const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "client.bundle.js",
    path: path.resolve(__dirname, "../dist")
  },
  devServer: {
    port: 3000,
    hot: true,
    stats: {
      colors: true
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          presets: ["es2015", "react"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
