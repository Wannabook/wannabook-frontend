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
  const devMode = env.NODE_ENV === 'development';
  const isTestingOnMobile = env && env.MOBILE_TESTING;
  const distFolder = 'dist';

  // Get the root path
  const currentPath = path.join(__dirname);

  // Create the fallback path (the production .env)
  const basePath = currentPath + '/.env';

  // We're concatenating the environment name
  // to our filename to specify the correct env file!
  const envPath = basePath + '.' + env.NODE_ENV;

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
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, distFolder),
      filename: '[name].[hash].js',
      chunkFilename: '[name].[hash].js',
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
            loader: 'ts-loader',
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
      modules: ['node_modules'],
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        routes: path.resolve(__dirname, 'src/routes'),
        sagas: path.resolve(__dirname, 'src/sagas'),
        services: path.resolve(__dirname, 'src/services'),
        store: path.resolve(__dirname, 'src/store'),
        utils: path.resolve(__dirname, 'src/utils'),
        'ui-kit': path.resolve(__dirname, 'src/ui-kit'),
        consts: path.resolve(__dirname, 'src/consts.ts'),
        types: path.resolve(__dirname, 'src/types.d.ts'),
      },
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
        chunksSortMode: 'none',
      }),
      new MiniCssExtractPlugin({
        filename: 'style.css',
      }),
      new webpack.HotModuleReplacementPlugin(),
      new WebpackMd5Hash(),
      new webpack.DefinePlugin(envKeys),
    ],
    optimization: {
      splitChunks: {
        chunks: 'async',
        cacheGroups: {
          default: false,
          vendors: false,
          // vendor chunk
          vendor: {
            // sync + async chunks
            chunks: 'all',
            // import file path containing node_modules
            test: /node_modules/,
          },
        },
      },
    },
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

  // TODO: add uglify for prod

  return config;
};
