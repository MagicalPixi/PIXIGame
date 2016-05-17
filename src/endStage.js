var pixiLib = require('pixi-lib')
module.exports = function(render, burnCount) {
  var stage = new PIXI.Container()
  require('./dynamic').currentStage = stage
  var endMask = require('./sprites/endMask')
  stage.addChild(endMask)
  var textStr = rate(burnCount);
  var text = new PIXI.Text(textStr,{font : '50px Arial', fill : 0x000000, align : 'center'});
  text.x = 360
  text.y = 340
  stage.addChild(text)  
  var backButton = require('./sprites/backButton')
  stage.addChild(backButton)
  render(stage)
  stage.render = function() {
    stage.children.forEach(function(child){
        if(child.render){
            child.render();
        }
    });
  }

  function rate (count) {
    if (count > 200 * 0.99) {
        return 99 + '%'
    } else {
        return count / 200 * 100 + '%'
    }
  }
}
