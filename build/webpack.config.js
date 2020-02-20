const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');


function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

function src(dir) {
    return resolve(path.join('src', dir))
}

module.exports = {
    entry: {
        main: src('index.jsx'),
    },
    output: {
        path: resolve('dist'),
        filename: 'static/js/[name].js',
        chunkFilename: 'static/js/[name].js',
        publicPath: '/'
    },
    resolve: {
        alias: {
            assets: src('assets'),
            utils: src('utils'),
            pages: src('pages'),
            components: src('components'),
        },
        extensions: ['*', '.js', '.jsx'],
        modules: [ path.resolve(__dirname, '..', 'node_modules')],
        mainFiles: ['index'],
    },
    module: {
        rules: [
            {
                test: /\.less?$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: resolve(''),
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192,
                      name: 'static/images/[name].[hash:8].[ext]'
                    },
                  },
                ],
            },
            {
                test: /\.(woff2?|eot|ttf|otf|svg)$/,
                loader: 'url-loader',
                exclude: resolve('src/assets/svg'),
                options: {
                    limit: 8192,
                    name: 'static/fonts/[name].[hash:8].[ext]'
                }
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                include: resolve('src/assets/svg'),
                options: {
                  symbolId: 'icon-[name]'
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', // 配置输出文件名
            template: src('index.html'),
            favicon: src('favicon.ico'),
        }),
        new MiniCssExtractPlugin({
            filename: "static/css/[name].css"
        }),
        new CopyPlugin([
            { from: src('/common/libs/flexible.js'), to: resolve('dist') },
		]),
    ]
}