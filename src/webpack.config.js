const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), 
    publicPath:'/'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'assets/[name].[ext]'
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: true,
      chunks: ['index'],
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './about.html',
      inject: true,
      chunks: ['index'],
      filename: 'about.html'
    }),
    new HtmlWebpackPlugin({
      template: './main.html',
      inject: true,
      chunks: ['index'],
      filename: 'main.html'
    }),
    new HtmlWebpackPlugin({
      template: './project.html',
      inject: true,
      chunks: ['index'],
      filename: 'project.html'
    })
  ],

  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    open: true,
  },

  mode: 'development',
};