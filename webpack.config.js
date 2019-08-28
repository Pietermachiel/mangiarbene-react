const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const nodeExternals = require('webpack-node-externals');

var path = require('path');

const devMode = process.env.NODE_ENV !== 'production';


module.exports = {
  mode: 'development',
  output : {
      filename : 'bundle.js?[hash]',
      publicPath: '/',
      path : path.resolve(__dirname, 'build')
  },
  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    stats: "errors-only",
    open: true,
    historyApiFallback: true,
    contentBase: './',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "./style.css?[hash]"
    }),
    require('autoprefixer')
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
};