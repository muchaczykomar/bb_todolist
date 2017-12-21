//webpack.config.js

const webpack = require('webpack');
const path = require('path');

const extractCommons = new webpack.optimize.CommonsChunkPlugin({
    name: 'commons',
    filename: 'commons.js'
});
const providePlugins = new webpack.ProvidePlugin({
    _: 'underscore'
});

const config = {
    context: path.resolve(__dirname, 'app'),
    entry: {
        app: './app.js'
    },
    output: {
        path: path.resolve(__dirname, 'public/javascripts'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'app'),
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    'es2015', {
                                        modules: false
                                    }
                                ]
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'public/stylesheets'),
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.html$/,
                include: path.resolve(__dirname, 'app/templates'),
                loader: 'underscore-template-loader'
            }
        ]
    },
    plugins: [
        extractCommons,
        providePlugins
    ]
};

module.exports = config;