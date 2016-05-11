var pixiLib = require('pixi-lib')
var arg = {
  textures:pixiLib.getTextures('fff'),
  maxFrame: 2,
  'position.set': [0, 1010],
  'anchor.set': [0,1],
  'animationSpeed': 0.05,
  'scale.x': 0.5,
  'scale.y': 0.5
}
var sprite = pixiLib.getMc(arg)
module.exports = sprite
