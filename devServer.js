var webpack = require('webpack');　　
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackDevServer = require('webpack-dev-server');
var config = require('./build/webpack.dev.config');

// config.entry.unshift("webpack-dev-server/client?http://localhost:9000"); // 将执替换js内联进去，用于解决浏览器不会自动刷新的问题
// config.entry.unshift("webpack/hot/only-dev-server");

var compiler = webpack(config);
var server = new webpackDevServer(compiler, {
    hot: true,
    historyApiFallback: false,
    // noInfo: true,
    stats: {　　
        colors: true // 用颜色标识
            　　
    },
    　　proxy: {　　　　
        "*": "http://localhost:9000" // 用于转发api数据，但webpack自己提供的并不太好用
    },
});
server.listen(9000, 'localhost', () => {
    console.log('Server running on http://localhost:9000');
});