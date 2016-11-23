var gulp = require('gulp')

var tiny = require('./tasks/tiny')
var qiniu = require('./tasks/qiniu')

tiny(gulp)
qiniu(gulp)

module.exports = gulp
