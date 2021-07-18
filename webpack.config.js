import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
export default {
  devtool: 'source-map',
  entry: [
    path.resolve(__dirname, './src/index.js')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/src/app/index.html',
      inject: true
    })
  ],
  module: {
    rules: [
      { test: /\.(ts|js)x?$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, use: "css-loader" },
      { test: /\.svg$/, use: "url-loader" },
    ],
  },
}