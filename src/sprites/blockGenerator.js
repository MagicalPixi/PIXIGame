var param = require('../params')
var generator = function(color, postion, ontouch) {
  ontouch = ontouch || function() {}
   var graphics = new PIXI.Graphics()
   graphics.over = function () {
     this.make(param.color.red)
     this.hasShow = true
   }
   graphics.on('touchstart', ontouch)
   graphics.interactive = true
   graphics.make = function(color) {
    this.clear()
    this.beginFill(color, 1)
    this.drawRect(postion.x, postion.y, 60, 60, 0)
    this.endFill()
   }
   graphics.showText = function(string) {
    var text = new PIXI.Text(string, {font: '50px Arial', fill:param.color.blue, align: 'center'});
    text.anchor.x = 0.5
    text.anchor.y = 0.5
    text.x = postion.x + 30
    text.y = postion.y + 30
    this.make(param.color.yellow)
    this.removeChildren()
    this.addChild(text)
    this.hasShow = true
   }
   graphics.make(color)
   graphics.hasShow = false
   return graphics          
 }
 module.exports = generator 
