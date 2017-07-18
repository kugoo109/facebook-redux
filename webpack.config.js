const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    vendor: [
      'bootstrap',
      'classnames',
      'jquery',
      'js-cookie',
      'react',
      'react-dom',
      'react-router-dom',
      'react-redux',
      'redux',
      'redux-thunk',
      'lodash',
      'prop-types',
    ],
    app: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './src/index.js'
    ],
    'vendor-style': [
      './node_modules/animate.css/animate.css',
      './node_modules/bootstrap/dist/css/bootstrap.css',
      './node_modules/font-awesome/css/font-awesome.css',
    ],
    style: './styles/index.scss',
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    },
    {
      test: /\.(css|scss)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: "css-loader!sass-loader",
      })
    },
    {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000'
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'js/[name].js'
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({ name: ['app', 'vendor'], minChunks: Infinity }),
    new ExtractTextPlugin({ filename: 'css/[name].css', allChunks: true }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new webpack.ProvidePlugin({
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    })
  ]
};
