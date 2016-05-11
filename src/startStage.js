/**
 * Created by guoshencheng on 11/9/15.
 */

var pixiLib = require('pixi-lib')
module.exports = function(render) {
  var stage = new PIXI.Container()
  var startBackground = require('./sprites/startBackground')
  var fffStart = require('./sprites/fffStart')
  var fires = require('./sprites/fires')
  var startButton = require('./sprites/startButton')
  startButton.on('touchstart', function() {
    
  })
  fires.play()
  fffStart.play()
  render(stage)
  stage.addChild(startBackground)
  stage.addChild(fffStart)
  stage.addChild(fires)
  stage.addChild(startButton)
}


//var stage = new PIXI.Container();
//
//stage.clear = function () {
    //stage.removeChildren()
    //stage.parent.removeChild(stage)
    //this.visible = false
////}
//
//stage.init = function() {
    //this.visible = true
    //var bg = sprite.getIm({
        //img: R.startBackground,
        //'position.set':[0,0],
        //'width':640,
        //'height':1004
    ////});
    //var fffStart = require('./sprites/fffStart')
    //fffStart.play()
    //var torch = require('./sprites/startTorch');
    //torch.play();
    //var startButton = sprite.getIm({
        //img: R.startButton,
        ////'position.set':[20,700]
    //});
    //startButton.interactive = true;
    //startButton.on('touchstart', function () {
        //stage.start()
    //});
    //this.addChild(bg)
    //this.addChild(torch)
    //this.addChild(fffStart)
    //this.addChild(startButton)
//}
//
//stage.render = function() {
    //stage.children.forEach((function(child){
        //if(child.render){
            //child.render();
        //}
    //}));
//}
