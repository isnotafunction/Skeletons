const path = require('path');
const extractTextPlugin = require('extract-text-webpack-plugin');
const config = {
  entry: './src/index', //RELATIVE file reference
  output: {
    path: path.resolve(__dirname, 'build'), //ABSOLUTE file reference
    filename: 'bundle.js',
    publicPath: 'build/'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/
      },
      // {
      //   use: ['style-loader', 'css-loader'], //order important
      //   test: /\.css$/
      // }
      {
        loader: extractTextPlugin.extract({
          loader: 'css-loader'
        }),
        test: /\.css$/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 }
          },
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [new extractTextPlugin('style.css')]
};

module.exports = config;
