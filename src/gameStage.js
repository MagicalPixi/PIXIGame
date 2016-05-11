var pixiLib = require('pixi-lib')

module.exports = function(render) {
  var generateLovers = function(stage, count) {
    var lovers = require('./sprites/lovers')(count)
    stage.loversArr.push(lovers)
    stage.addChild(lovers);
  }
  var randomLovers = {
    0: function(stage) {
        generateLovers(stage, 0)
    },
    1: function(stage) {
        generateLovers(stage, 1)
    },
    2: function(stage) {
        generateLovers(stage, 2)
    },
    3: function(stage) {
        generateLovers(stage, 0)
        generateLovers(stage, 2)
    },
    4: function(stage) {
        generateLovers(stage, 0)
        generateLovers(stage, 1)
    },
    5: function(stage) {
        generateLovers(stage, 1)
        generateLovers(stage, 2)
    },
    6: function(stage) {
        generateLovers(stage, 0)
        generateLovers(stage, 1)
        generateLovers(stage, 2)
    }
}
  var stage = new PIXI.Container() 
  stage.isEnd = false
  stage.interactive = true
  stage.loversArr = []
  stage.timer = 0
  stage.lg = 0 //lover group count
  this.visible = true
  this.burnCount = 0
  this.progress = 0
  var background = require('./sprites/background')
  var fff = require('./sprites/fff')
  fff.play()
  var hands = require('./sprites/hands')
  stage.addChild(background)
  stage.addChild(fff)
  stage.addChild(hands)
  stage.render = function() {
    if(this.isEnd) {
        return
    }
    if(stage.timer % 120 === 0) {
        var r = parseInt(Math.random() * 7)
        randomLovers[r](stage)
        stage.lg ++
    }
    stage.timer ++
    stage.children.forEach((function(child){
        if(child.render){
            child.render();
        }
    }));
}

  render(stage)
  
}
