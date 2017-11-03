const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('../../webpack.config.js');

module.exports = merge(common, {
    devtool: 'source-map',
    plugins: [
        // new UglifyJSPlugin(),
        new webpack.DefinePlugin({ // https://webpack.js.org/guides/production/#specify-the-environment
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
});