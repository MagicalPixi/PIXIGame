var pixiLib = require('pixi-lib')
var backButton = pixiLib.getIm({
    textures: pixiLib.getTextures('backButton'),
    'anchor.set': [0.5, 0.5],
    'position.set':[320,550]
});
backButton.interactive = true
backButton.on('touchstart', function(e) {
  window.gamePage()
})

module.exports = backButton
