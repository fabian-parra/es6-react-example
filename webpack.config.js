const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: __dirname + '/src/main.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
  },
  resolve: {
    root: path.resolve(__dirname),
    alias: {
      srcDir: path.join(__dirname, '/src'),
    },
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: /src/,
      loader: 'babel',
    }]
  },
  devServer: {
    //contentBase: ".",
    //colors: true,
    //historyApiFallback: true,
    //stats: 'errors-only',
    inline: true,
    host: '0.0.0.0',
    port: 4000,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.template.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
}
