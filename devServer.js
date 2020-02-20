var webpack = require('webpack');
var express = require('express');
var path = require('path');
var config = require('./build/webpack.dev.config');

var isProduction = process.env.NODE_ENV === 'production';
var isDeveloping = !isProduction;

var app = express();

var devMiddleWare, publicPath = isDeveloping ? path.join(__dirname) : path.join(__dirname, 'dist');

// Webpack developer
if (isDeveloping) {
    var compiler = webpack(config);
    devMiddleWare = require('webpack-dev-middleware')(compiler, {
        publicPath: config.output.publicPath,
        stats: {
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }
    });
    app.use(devMiddleWare);
    app.use(require('webpack-hot-middleware')(compiler));
    var mfs = devMiddleWare.fileSystem;
    var file = path.join(config.output.path, 'index.html');
    app.get('/middle.html', (req, res) => {
        res.end();
    })
    app.get('*', function (req, res) {
        devMiddleWare.waitUntilValid(function () {
            var html = mfs.readFileSync(file);
            res.end(html);
        })
    })
} else {
    app.get('/', function (req, res) {
        res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
    })
}

var port = isProduction ? (process.env.PORT || 800) : 3005;

app.listen(port, function (err, result) {
    if (err) {
        console.log(err);
    }
    console.log('Server running on http://localhost:' + port);
});