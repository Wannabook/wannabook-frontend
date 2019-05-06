const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';
const isTestingOnMobile = process.env.MOBILE_TESTING == true;
const distFolder = 'dist';

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, distFolder),
    filename: '[name].[hash].js',
    chunkFilename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: 'body',
      hash: true,
      template: './public/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new WebpackMd5Hash(),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    open: false,
    historyApiFallback: true,
  },
  devtool: 'eval-source-map',
};

if (isTestingOnMobile) {
  mobule.exports.plugins.push(
    new BrowserSyncPlugin({
      proxy: 'localhost:8080',
      // open: false,
      // server: { baseDir: ['public'] }
    })
  );
}
