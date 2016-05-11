var pixiLib = require('pixi-lib')
var arg = {
  maxFrame: 4,
  textures:pixiLib.getTextures('fires'),
  'position.set': [440,520],
  'anchor.set': [0,1],
  'animationSpeed': 0.5,
  'scale.x': 0.4,
  'scale.y': 0.4
}

var sprite = pixiLib.getMc(arg)

module.exports = sprite
