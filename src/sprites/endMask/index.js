var pixiLib = require('pixi-lib')

var mask = pixiLib.getIm({
  textures: pixiLib.getTextures('endMask'),
  'position.set':[0,0],
  'width':640,
  'height':1004
})

module.exports = mask
