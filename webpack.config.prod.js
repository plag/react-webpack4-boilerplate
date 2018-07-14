const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const fileLoaderExclude = [/\.js$/, /\.html$/, /\.json$/, /\.s(a|c)ss$/, /\.css$/, /\.svg$/];
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const SpritePlugin = require('svg-sprite-loader/plugin');

module.exports = {
  mode: 'production',
  entry: [
    './index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  context: resolve(__dirname, 'src'),
  devtool: 'source-map',
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
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader, // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "postcss-loader",
          "sass-loader", // compiles Sass to CSS
        ]
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        loader: 'svg-sprite-loader',
      },
      {
        exclude: fileLoaderExclude,
        loader: require.resolve('file-loader'),
        options: {
          name: '[name].[hash:8].[ext]',
          // outputPath: 'src/static/',
          // publicPath: 'static/',
        },
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'dist/index.html'
    }),

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
    new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
  ],
};
