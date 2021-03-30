const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = require('./paths');

module.exports = {
  mode: 'development',
  entry: paths.appIndexJs,
  output: {
    filename: 'bundle.js',
    path: paths.appBuild,
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: paths.appBuild,
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                [
                  'postcss-preset-env',
                  {
                    plugins: {
                      tailwindcss: {},
                      autoprefixer: {},
                    }
                  },
                ],
              ],
            },
          },
        }],
      },
    ],
  },
};
