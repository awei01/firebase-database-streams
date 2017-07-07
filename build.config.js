var path = require('path')
var webpack = require('webpack')

var pkg = require('./package.json')
var pathInfo = pkg.main.split('/')
var folder = pathInfo[0]
var library = pkg.name

module.exports = {
  entry: {
    index: path.join(__dirname, 'src', 'index.js'),
    'index.min': path.join(__dirname, 'src', 'index.js')
  },
  output: {
    path: path.join(__dirname, folder),
    filename: '[name].js',
    // library: library,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  ]
}
