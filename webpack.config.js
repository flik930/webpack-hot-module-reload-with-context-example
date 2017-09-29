const webpack = require('webpack')
const path = require('path');

var BUILD_DIR = path.resolve(__dirname, './app/bundles');
var APP_DIR = path.resolve(__dirname, './app');

var config = {
  entry: {
    'app': [
      'react-hot-loader/patch',
      APP_DIR + '/modules/app.js',
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js'
  },
  resolve: {
    modules: [
      APP_DIR,
      APP_DIR + '/react',
      "node_modules"
    ]
  },
  module : {
    rules: [
      { test: /\.js$/, include: [APP_DIR + '/react', APP_DIR + '/modules'], loader: 'babel-loader' },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      },
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: ['./', './app'],
    port: 8080
  },
};

module.exports = config;
