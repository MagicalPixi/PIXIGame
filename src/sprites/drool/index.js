var pixiLib = require('pixi-lib')
var endProgress = require('../endProgress/')
var defaultConfig = {
  x: 320,
  y: 320
}
var droolBuild = function(config){
    config = config || defaultConfig
    var arg = {
      maxFrame:2,
      textures: pixiLib.getTextures('drool'),
      'anchor.set':[0.5,0.5],
      'scale.x':0.25,
      'scale.y':0.25,
      'loop':false,
      x: config.x,
      y: config.y
    }
    var drool = pixiLib.getMc(arg)
    drool.speed = 4;
    drool.direction  = pixiLib.makeIdentity([85-config.x,940-config.y]);
    drool.keeyTimes = 60;
    drool.fly = function(dt){
        this.x = this.x + this.direction[0] * this.speed * dt
        this.y = this.y + this.direction[1] * this.speed * dt
    };

    drool.hit = function(){
        if(this.y >= 940){
            return true;
        }
    }
    drool.hited = function(){
        if(this.keeyTimes > 0){
            if(this.keeyTimes == 60) {
                endProgress.progress ++
                endProgress.gotoAndStop(endProgress.progress)
                if(endProgress.progress >= 10) {
                  endProgress.gotoAndStop(10)
                  var stage = require('../../dynamic').currentStage
                  window.endPage(stage.burnCount)
                }
            }
            this.keeyTimes--;
            this.scale.x = 0.5;
            this.scale.y = 0.5;
            this.gotoAndStop(1);
        }else{
            this.parent.removeChild(this);
        }
    }
    drool.render = function(){
        if(this.hit()){
            this.hited();
        }else{
            this.fly(2);
        }
    };
    return drool
};

module.exports = droolBuild
