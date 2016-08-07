var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require('path'),
    srcPath = path.join(__dirname, 'src');

module.exports = {
    target: 'web',
    cache: true,
    entry: {
        module: path.join(srcPath, 'js/module.js'),
        common: ['react', 'react-router', 'alt']
    },
    resolve: {
        root: srcPath,
        extensions: ['', '.js'],
        modulesDirectories: ['node_modules', 'src/js']
    },
    output: {
        path: path.join(__dirname, 'tmp'),
        publicPath: '',
        filename: '[name].js',
        pathInfo: true
    },
    module: {
        preLoaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'eslint' }
        ],
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel?cacheDirectory' },
            { test: /\.scss$/, loaders: ['style', 'css', 'sass'] }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
        new HtmlWebpackPlugin({
            inject: true,
            template: 'src/index.html'
        }),
        new webpack.NoErrorsPlugin()
    ],
    debug: true,
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: './tmp',
        historyApiFallback: true
    }
};
