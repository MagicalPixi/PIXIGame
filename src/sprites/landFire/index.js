var pixiLib = require('pixi-lib')
var landFireBuilder = function() {
  var arg = {
    textures: pixiLib.getTextures('landFire'),  
    'scale.x': 0.3,
    'scale.y': 0.3,
    'anchor.set': [0.5, 0.5]
  }
  var landFire = pixiLib.getIm(arg)
  landFire.restTime = 50
  landFire.render = function() {
      if(this.restTime <= 0) {
          this.parent.removeChild(this)
          this.destroy()
      } else {
          landFire.restTime --
      }
  }
  return landFire
}

module.exports = landFireBuilder;
