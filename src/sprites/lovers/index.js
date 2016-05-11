var pixiLib = require('pixi-lib')
var config = require('./config')()
var droolBuild = require('../drool');

var loverBuilder = function(type ,cb) {
    var cf = config[type]
    var arg = {
      maxFrame: 6,
      textures: pixiLib.getTextures('lovers'),
      'position.set': [cf.x, 480],
      'animationSpeed': 0.2,
      'anchor.set': [0.5, 0.5],
      'scale.x': 0.5,
      'scale.y': 0.5
    }
    var lovers = pixiLib.getIm(arg)
    lovers.shootDistance = 210 + 150 * Math.random()
    lovers.direction = pixiLib.makeIdentity(cf.direction)
    lovers.speed = 10
    //lovers.speed = 10 + stage.lg * 0.1
    lovers.dscale = 0.5 * lovers.speed / 5000
    lovers.move = function(dt) {
        this.scale.x += lovers.dscale
        this.scale.y += lovers.dscale
        this.x = this.x + this.direction[0] * this.speed * dt
        this.y = this.y + this.direction[1] * this.speed * dt
    };

    lovers.checkout = function() {
        if(!this.drooled && lovers.y > (1004 - lovers.shootDistance)){
            this.drooled = true;
            var drool = droolBuild({
                x:lovers.x,
                y:lovers.y
            });
            this.parent.addChild(drool);
        }

        if(lovers.y > (1004 - 70)) {
            var stage = this.parent;
            stage.removeChild(lovers)
            stage.loversArr.splice(stage.loversArr.indexOf(lovers), 1)
            lovers.destroy()
        }
    }

    lovers.render = function(){
        this.move(0.1);
        this.checkout()
    }
    return lovers
}

module.exports = loverBuilder
