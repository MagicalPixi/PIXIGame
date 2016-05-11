var pixiLib = require('pixi-lib')
var arg = {
  textures: pixiLib.getTextures('startButton'),
  'position.set':[20,700]
}
var sprite = pixiLib.getIm(arg)
sprite.interactive = true
module.exports = sprite
