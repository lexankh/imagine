const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // добавили плагин
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var ImageminPlugin = require('imagemin-webpack-plugin').default;
const isDev = process.env.NODE_ENV === 'development';


module.exports = {
  entry: {
    main: './src/index.js',
            },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: [
                        (isDev ? 'style-loader' : MiniCssExtractPlugin.loader),
                        'css-loader', 
                        'postcss-loader'
                ]
},
      {
      test: /\.(eot|ttf|woff|woff2)$/,
      loader: 'file-loader?name=./vendor/[name].[ext]'
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: './images/[name].[ext]',
            esModule: false 
          }
        }
      }
    ]
  },
  
  plugins: [
    new MiniCssExtractPlugin({ // 
      filename: 'style.[contenthash].css',
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
              preset: ['default'],
      },
      canPrint: true
}),
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }),
  new ImageminPlugin({
    disable: process.env.NODE_ENV !== 'production', // Disable during development
    pngquant: {
      quality: '95-100'
    }
  }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new WebpackMd5Hash()
  ]
};