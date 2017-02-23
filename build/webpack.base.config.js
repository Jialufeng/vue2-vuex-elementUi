var path = require('path'),
    webpack = require('webpack')
ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: {
        app: './src/main.js',
    },
    output: {
        path: path.resolve(__dirname, '../dist/static'),
        publicPath: '/static/',
        filename: '[name].js',
        chunkFilename: "chunks/[name]-[chunkhash:8].js"
    },
    resolve: {
        extensions: ['', '.js', '.vue'],
        alias: {
            'src': path.resolve(__dirname, '../src'),
            // jquery: path.resolve(__dirname, '../static/js/core/libraries') + '/jquery.min'
        },

    },
    externals: {
        jquery: 'window.$',
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        },
            //linux
            {
                test: /..\/static\/.*\.js$/,
                loader: 'url',
            }, {
                test: /..\/src\/.*\.js$/,
                // test: /..\/src\/.*\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            //windows
            {
                test: /\.js$/,
                loader: 'url',
                exclude: /(node_modules|src)/,
                include: /..\\static/
            },

            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /(node_modules|static)/,
                include: /..\\src/
            }, {
                test: /\.json$/,
                loader: 'json'
            }, {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: '[name].[ext]?[hash:7]'
                }
            }, {
                test: /\.sass$/,
                loader: "style!css!sass"
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=10000000&name=[name].[ext]'
            }
        ]
    },
    vue: {
        loaders: {
            //js: 'babel!eslint'
            js: 'babel',
            css: ExtractTextPlugin.extract("css"),
            sass: ExtractTextPlugin.extract('vue-style-loader', 'css-loader!sass-loader'),
        }
    },
    plugins: [
        // new webpack.ProvidePlugin({
        //     $: "jquery",
        //     jQuery: "jquery",
        //     "window.jQuery": "jquery"
        // }),
        new ExtractTextPlugin("[name].css", {
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin('common.js')
    ],
    eslint: {
        formatter: require('eslint-friendly-formatter')
    }
}