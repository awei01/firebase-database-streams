var rimraf = require('rimraf')
var chalk = require('chalk')

var config = require('../build.config.js')
var folder = config.output.path

rimraf(folder, function (err, result) {
  if (err){
    throw err
  }
  console.log(chalk.cyan('Cleaned folder [' + folder + ']\n'))
})
