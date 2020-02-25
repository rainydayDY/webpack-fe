var base = require('./webpack.config');
const TerserPlugin = require('terser-webpack-plugin'); // 用来压缩js的
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

base.mode = "production";
base.devtool = 'hidden-source-map';

base.optimization = {
    minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
};

if (process.env.ANALYZE) {
    base.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = base;