var loversSpeed = 0
var reset = function() {
  loversSpeed = 0
  var endProgress = require('./sprites/endProgress')
  endProgress.progress = 0
}

module.exports = {
  loversSpeed: loversSpeed,
  reset: reset
}
