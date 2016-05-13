/**
 * Created by zyg on 15/11/7.
 */
var pixiLib = require('pixi-lib');

var setGravity = function (flyingTorch) {
    var distance = pixiLib.distance(flyingTorch.x, flyingTorch.y, flyingTorch.tarx, flyingTorch.tary)
    var times = parseInt(distance / flyingTorch.speed);
    flyingTorch.g = 0.04
    flyingTorch.vup =  - flyingTorch.g * times / 2
};

var setConfig = function(flyingTorch){
    //flyingTorch.vup = 5
    flyingTorch.x = 160;
    flyingTorch.y = 870;
    flyingTorch.direction = pixiLib.makeIdentity([parseInt(flyingTorch.tarx-160),parseInt(flyingTorch.tary-870)]);
    flyingTorch.speed = 2;
    setGravity(flyingTorch);
    flyingTorch.fly = function(dt){
        this.scale.x -= (0.001 * dt * Math.abs(this.direction[1]))
        this.scale.y -= (0.001 * dt * Math.abs(this.direction[1]))
        this.x = this.x + this.direction[0] * this.speed * dt
        this.y = this.y + this.direction[1] * this.speed * dt
        this.y = this.y + this.vup * dt
        this.vup = this.vup + this.g * dt
    };

    flyingTorch.render = function(){
        if(this.x < 0 || this.x > 640 ||
                (this.direction[0] < 0 && (this.x < this.tarx)) ||
                (this.direction[0] >= 0 && (this.x >= this.tarx))) {
            this.arrived && this.arrived(this);
            this.parent.removeChild(this)
        }else{
            this.fly(2);
        }
    };
    return flyingTorch;
};

module.exports = function(config){
  config = config || {}
  config['scale.x'] = 0.3
  config['scale.y'] = 0.3
  config['anchor.set'] = [0.5, 0.5]
  config.textures = pixiLib.getTextures('flyingFire')
  var flyingTorch = pixiLib.getIm(config);
  return setConfig(flyingTorch);
};
