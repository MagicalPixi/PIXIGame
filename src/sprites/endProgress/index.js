var pixiLib = require('pixi-lib')
var arg = {
  textures: pixiLib.getTextures('endProgress'),
  'position.set': [200, 990],
  'anchor.set': [0, 1],
  'loop':false,
  'scale.x': 1,
  'scale.y': 1
}

var sprite = pixiLib.getMc(arg)
sprite.progress = 0
module.exports = sprite
