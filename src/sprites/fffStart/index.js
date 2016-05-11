var pixiLib = require('pixi-lib')
var arg = {
  textures:pixiLib.getTextures('fffStart'),
  maxFrame: 2,
  'position.set': [320, 800],
  'anchor.set': [0.5,1],
  'animationSpeed': 0.05,
  'scale.x': 1,
  'scale.y': 1
}

var sprite = pixiLib.getMc(arg)
module.exports = sprite
