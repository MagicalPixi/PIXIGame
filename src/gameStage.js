var pixiLib = require('pixi-lib')
var dynamic = require('./dynamic')
var landFireBuilder = require('./sprites/landFire')
module.exports = function(render) {
  dynamic.reset()
  var loversSpeed = require('./dynamic').loversSpeed
  var randomLovers = require('./sprites/lovers')
  var endProgress = require('./sprites/endProgress')
  var stage = new PIXI.Container()
  require('./dynamic').currentStage = stage
  stage.interactive = true
  stage.loversArr = []
  stage.timer = 0
  stage.visible = true
  stage.burnCount = 0
  stage.progress = 0
  var background = require('./sprites/background')
  var fff = require('./sprites/fff')
  fff.play()
  var hands = require('./sprites/hands')
  var torch = require('./sprites/torch')
  torch.play()
  stage.addChild(background)
  stage.addChild(torch)
  stage.addChild(fff)
  stage.addChild(hands)
  stage.addChild(endProgress)
  var flyingtorchbuild = require('./sprites/flyingfire')
  stage.interactive = true
  stage.on('touchstart', function(e) {
    var x = e.data.global.x;
    var y = e.data.global.y;
    hands.gotoAndPlay(0);
    torch.rf = 2
    var flyingtorch = flyingtorchbuild({
        tarx: x,
        tary: y,
        arrived: function (torch) {
        checkShoot(torch.x, torch.y)
        var landfire = landFireBuilder()
        landfire.x = torch.x
        landfire.y = torch.y + torch.height / 3
        landfire.scale.x = torch.scale.x + 0.1
        landfire.scale.y = torch.scale.y + 0.1
        stage.addChild(landfire)
       }
    });
    stage.addChild(flyingtorch);
  })
  stage.render = function() {
    if(stage.timer % 120 === 0) {
        var r = parseInt(Math.random() * 7)
        loversSpeed ++
        randomLovers(r, stage)
    }
    stage.timer ++
    stage.children.forEach(function(child){
        if(child.render){
            child.render();
        }
    });
  }
  var checkShoot = function(x, y) {
    var i = 0
    while (i < stage.loversArr.length) {
      var lovers = stage.loversArr[i];
      if (Math.abs(lovers.x - x) < 40 && Math.abs(lovers.y - y) < 40) {
        stage.loversArr.splice(i, 1);
        stage.removeChild(lovers)
        stage.burnCount ++
      } else {
        i++;
      }
    }
  }
  render(stage)
}
