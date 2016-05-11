var pixiLib = require('pixi-lib')
var arg = {
  maxFrame: 3,
  textures: pixiLib.getTextures('hands'),
  'position.set': [130, 1004],
  'anchor.set': [0, 1],
  'animationSpeed': 0.3,
  'loop':false,
  'scale.x': 0.3,
  'scale.y': 0.3
}
var sprite = pixiLib.getMc(arg)
module.exports = sprite
