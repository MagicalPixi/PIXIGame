var pixiLib = require('pixi-lib')
var dynamic = require('./dynamic')
module.exports = function(render) {
  dynamic.reset()
  var loversSpeed = require('./dynamic').loversSpeed
  var randomLovers = require('./sprites/lovers')
  var stage = new PIXI.Container() 
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
        //checkshoot(torch.x, torch.y)
        //var landfire = landfirebuilder()
        //landfire.x = torch.x
        //landfire.y = torch.y + torch.height / 3
        //landfire.scale.x = torch.scale.x + 0.1
        //landfire.scale.y = torch.scale.y + 0.1
        //stage.addchild(landfire)
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
  render(stage)
}
