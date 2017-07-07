var path = require('path')
var webpack = require('webpack')

var pkg = require('./package.json')
var pathInfo = pkg.main.split('/')
var folder = pathInfo[0]
var filename = pathInfo[1]
var library = pkg.name

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, folder),
    filename: filename,
    // library: library,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ minimize: true })
  ]
}
