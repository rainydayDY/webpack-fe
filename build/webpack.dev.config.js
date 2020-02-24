var base = require('./webpack.config');
var webpack = require('webpack');　

base.mode = "development";
base.devtool = 'cheap-eval-source-map';

Object.keys(base.entry).forEach(function (name) {
    base.entry[name] = ['webpack-hot-middleware/client'].concat(base.entry[name]);
});

base.plugins.push(
    new webpack.HotModuleReplacementPlugin(), // 模块热更新
);

module.exports = base;