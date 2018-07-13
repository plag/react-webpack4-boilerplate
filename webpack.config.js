const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    // activate HMR for React

    'webpack-dev-server/client?http://0.0.0.0:3000',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    // 'babel-polyfill',

    './index.js'
    // the entry point of our app
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  // output: {
  //   filename: 'bundle.js',
  //   // the output bundle

  //   path: resolve(__dirname, 'dist'),

  //   publicPath: 'http://127.0.0.1:8080/'
  //   // necessary for HMR to know where to load the hot update chunks
  // },

  context: resolve(__dirname, 'src'),

  devtool: 'inline-source-map',

  devServer: {
    hot: true,
    // enable HMR on the server
    port: 3000,
    host: '0.0.0.0',

    contentBase: resolve(__dirname, 'dist'),

    publicPath: '/',
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules',
        ],
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new HtmlWebpackPlugin({
      template: 'dist/index.html'
    }),

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
  ],
};
