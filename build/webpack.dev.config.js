var webpack = require('webpack'),
    config = require('./webpack.base.config'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

config.devtool = 'eval-source-map';

var polyfill = 'eventsource-polyfill';
var hotClient = 'webpack-hot-middleware/client?noInfo=true&reload=true';
Object.keys(config.entry).forEach(function (name, i) {
    var extras = i === 0 ? [polyfill, hotClient] : [hotClient]
    config.entry[name] = extras.concat(config.entry[name])
});


config.output.publicPath = '/';

config.plugins = (config.plugins || []).concat([
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.html',
        inject: true
    })
]);

module.exports = config;