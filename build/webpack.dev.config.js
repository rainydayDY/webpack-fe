var base = require('./webpack.config');
var webpack = require('webpack');　

base.mode = "development";
base.devtool = 'cheap-module-eval-source-map';
base.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
);

module.exports = base;