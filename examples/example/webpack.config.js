const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

const BUILD_FOLDER = 'build';

const config = {
  entry: {
    exchange: './src/index.js',
  },

  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, BUILD_FOLDER),
    publicPath: '/',
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }],
              '@babel/react'
            ]
          }
        }
      },
      {
        test: /\.css/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, '/'),
    port: 3000,
  },

  plugins: [
    new HtmlPlugin({
      title: 'test',
      template: path.resolve(__dirname, 'template.html'),
    }),
  ],
};

module.exports = () => {
  return config;
};
