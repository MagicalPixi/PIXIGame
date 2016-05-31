var aspect;
var pixiLib = require('pixi-lib');
var params = require('./params')
var loader = require('./loader')
var view = document.getElementById('game')
var currentDistance = 0
resetSize()
var renderer = PIXI.autoDetectRenderer(640, aspect * 640, { 
  antialias: true,
  view: view,
  transparent:true
});

var game = require('./game')
game.resetGame()

var stage = new PIXI.Container() 
game.y = 100
stage.addChild(game)
var graphics = new PIXI.Graphics()
graphics.beginFill(params.color.red)
graphics.drawRect(170, 800, 300, 80, 20)
graphics.endFill()
graphics.interactive = true
graphics.on('touchstart', function() {
  game.resetGame()
})
stage.addChild(graphics)

animate();

function animate() {
    renderer.render(stage);
    requestAnimationFrame(animate);
}

window.onresize = function() {
  resetSize()
  renderer.resize(640, aspect * 640)
}

function resetSize() {
  aspect = document.body.clientHeight / document.body.clientWidth
}

