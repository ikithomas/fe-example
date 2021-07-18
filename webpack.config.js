var path = require("path");

module.exports = {
  // Change to your "entry-point".
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    chunkFilename: '[name].bundle.js',
  },
  module: {
    rules: [
      { test: /\.(ts|js)x?$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, use: "css-loader" },
      { test: /\.svg$/, use: "url-loader" },
    ],
  },
  plugins: [],
};
