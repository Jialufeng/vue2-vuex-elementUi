var webpack = require('webpack')
var config = require('./webpack.base.config')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')


config.output.filename = '[name].[chunkhash].js'
config.output.chunkFilename = '[id].[chunkhash].js'


var SOURCE_MAP = false

config.devtool = SOURCE_MAP ? 'source-map' : false

function generateExtractLoaders(loaders) {
  return loaders.map(function (loader) {
    return loader + '-loader' + (SOURCE_MAP ? '?sourceMap' : '')
  }).join('!')
}

config.vue.loaders = {
  // js: 'babel!eslint',
  js: 'babel',

  css: ExtractTextPlugin.extract('vue-style-loader', generateExtractLoaders(['css'])),
  //less: ExtractTextPlugin.extract('vue-style-loader', generateExtractLoaders(['css', 'less'])),
  //sass: ExtractTextPlugin.extract('vue-style-loader', generateExtractLoaders(['css', 'sass'])),
  //stylus: ExtractTextPlugin.extract('vue-style-loader', generateExtractLoaders(['css', 'stylus']))
}

config.plugins = (config.plugins || []).concat([
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
  // extract css into its own file
  new ExtractTextPlugin('[name].[contenthash].css', {
    allChunks: true
  }),
  // generate dist index.html with correct asset hash for caching.
  // you can customize output by editing /src/index.html
  // see https://github.com/ampedandwired/html-webpack-plugin

  new HtmlWebpackPlugin({
    filename: '../index.html',
    template: 'src/index.html',
    inject: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
    }
  })
])

module.exports = config