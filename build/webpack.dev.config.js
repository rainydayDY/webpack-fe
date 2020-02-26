var base = require('./webpack.config');
var webpack = require('webpack');　

base.mode = "development";
base.devtool = 'cheap-eval-source-map';
base.devServer = {
    contentBase: './build', 
    port: '1188', 
    historyApiFallback: true,  
    inline: true,  
    hot: true,  //设置这里
};

Object.keys(base.entry).forEach(function (name) {
    base.entry[name] = ['react-hot-loader/patch', 'webpack-hot-middleware/client'].concat(base.entry[name]);
});

base.plugins.push(
    new webpack.HotModuleReplacementPlugin(), // 模块热更新
);

module.exports = base;