var pixiLib = require('pixi-lib')
var arg = {
  textures: pixiLib.getTextures('startBackground'),
  spriteName: "startBackground"
}

var sprite = pixiLib.getIm(arg)
module.exports = sprite
