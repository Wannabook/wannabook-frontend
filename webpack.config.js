const fs = require('fs');
const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const dotenv = require('dotenv');

module.exports = env => {
  const devMode = process.env.NODE_ENV === 'development';
  const isTestingOnMobile = env && env.MOBILE_TESTING;
  const distFolder = 'dist';

  // Get the root path
  const currentPath = path.join(__dirname);

  // Create the fallback path (the production .env)
  const basePath = currentPath + '/.env';

  // We're concatenating the environment name
  // to our filename to specify the correct env file!
  const envPath = basePath + '.' + env.ENVIRONMENT;

  // Check if the file exists, otherwise fall back to the production .env
  const finalPath = fs.existsSync(envPath) ? envPath : basePath;

  // Set the path parameter in the dotenv config
  const fileEnv = dotenv.config({ path: finalPath }).parsed;

  // reduce it to a nice object
  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);

    return prev;
  }, {});

  const config = {
    entry: { main: './src/index.tsx' },
    output: {
      path: path.resolve(__dirname, distFolder),
      filename: '[name].[hash].js',
      chunkFilename: '[name].js',
      publicPath: '/',
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
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'awesome-typescript-loader',
          },
        },
        {
          test: /\.(scss|sass|css)$/,
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
        {
          test: /\.(png|woff|woff2|eot|ttf|svg|gif)$/,
          loader: 'url-loader',
        },
      ],
    },
    resolve: {
      modules: ['node_modules', 'node_modules/redux-saga'],
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        routes: path.resolve(__dirname, 'src/routes'),
        sagas: path.resolve(__dirname, 'src/sagas'),
        services: path.resolve(__dirname, 'src/services'),
        store: path.resolve(__dirname, 'src/store'),
        utils: path.resolve(__dirname, 'src/utils'),
        'ui-kit': path.resolve(__dirname, 'src/ui-kit'),
        consts: path.resolve(__dirname, 'src/constants.js'),
      },
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
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
      new webpack.DefinePlugin(envKeys),
    ],
    devServer: {
      contentBase: './dist',
      hot: true,
      open: false,
      historyApiFallback: true,
    },
    devtool: devMode ? 'eval-source-map' : 'source-map',
  };

  if (isTestingOnMobile) {
    config.plugins.push(
      new BrowserSyncPlugin({
        proxy: 'localhost:8080',
        open: false,
      })
    );
  }

  return config;
};
