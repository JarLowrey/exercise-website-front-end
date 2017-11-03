const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const babelLoaderOptions = require('./webpack/loaders/babel');

module.exports = {
  entry: {
    main: './src/index.jsx',
    vendor: [
      'react'
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  output: {
    filename: '[name].[hash].js', //chunkhash for caching
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Comity fit'
    }),
    // new webpack.HashedModuleIdsPlugin(), // https://webpack.js.org/plugins/hashed-module-ids-plugin/            
    // new webpack.optimize.CommonsChunkPlugin({ // https://webpack.js.org/plugins/commons-chunk-plugin/
    //   name: 'vendor'
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'runtime'
    // }),
    // new webpack.optimize.CommonsChunkPlugin({ // https://webpack.js.org/plugins/commons-chunk-plugin/
    //   name: 'common'
    // }),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin()
  ],
  devServer: { // https://webpack.js.org/configuration/dev-server/
    contentBase: './dist',
    port: 3000,
    hot: true
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      babelLoaderOptions,
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
    ]
  }
};