var generator = require('./sprites/blockGenerator.js')
var params = require('./params')
var stage = new PIXI.Container()

var clearGame = function() {
  stage.removeChildren()
  stage.mines = []
  stage.blocks = []
}

var initGame = function() {
  initMineArray()
  initBlocks()
}

var initMineArray = function () {
  stage.mines = []
  while(stage.mines.length < 10) {
    var mine = initMine()
    if(!checkMine(mine)) {
      stage.mines.push(mine)
    }
  }
}

var initBlocks = function() {
  for (var i = 0; i < 9; i ++) {
    stage.blocks[i] = []
    for (var j = 0; j < 9; j ++) {
      var block = generator(params.color.blue, postion(i, j), onClickBlock)
      block.indexPath = {x:i, y:j}
      stage.blocks[i][j] = block
      stage.addChild(block)
    }
  }
}

var onClickBlock = function() {
  var indexPath = this.indexPath
  if (checkMine(indexPath)) {
    this.over()
  } else {
    indexPath.deep = 0
    showBlock(indexPath)
  }
}

var showBlock = function(indexPath) {
  if (!checkMine(indexPath)) {
    var block = stage.blocks[indexPath.x][indexPath.y]
    var count = caculateMine(indexPath)
    if (count === 0) {
      if (block && block.showText) {
        block.showText('')
      }
      if (indexPath.deep >= 2) return
      showOtherBlock(indexPath)
    } else {
      block.showText(count + '')
    }
  }
}

var showOtherBlock = function(mine) {
  var array = [{x: -1, y: 0}, 
              {x:0, y: -1}, {x: 0, y: 1},
              {x: 1, y: 0}]
  for(var index in array) {
    var a = array[index]
    var currentMine = {x: mine.x + a.x,
                       y: mine.y + a.y}
    if(currentMine.x >= 0 && currentMine.y >= 0) {
      currentMine.deep = mine.deep + 1
      showBlock(currentMine)
    }
  }
}

var caculateMine = function(mine) {
  var count = 0
  var array = [{x:-1, y:-1}, {x: -1, y: 0}, {x: -1, y: 1},
              {x:0, y: -1}, {x: 0, y: 1},
              {x:1, y: -1}, {x: 1, y: 0}, {x: 1, y: 1}]
  for(var index in array) {
    var a = array[index]
    var currentMine = {x: mine.x + a.x,
                       y: mine.y + a.y}
    if(currentMine.x >= 0 && currentMine.y >= 0 && checkMine(currentMine)) {
        count ++ 
    }
  }
  return count
}

var checkMine = function(mine) {
  var exist = false
  for(var index in stage.mines) {
    var currentMine = stage.mines[index]
    if (currentMine.x == mine.x && currentMine.y == mine.y) {
      exist = true
      break;
    }
  }
  return exist
}

var initMine = function() {
  return {
    x: parseInt(Math.random() * 10),
    y: parseInt(Math.random() * 10)
  }
}

var postion = function(i, j) {
  return {
    x: 10 + 70 * i,
    y: 10 + 70 * j
  }
}

stage.resetGame = function() {
  clearGame()
  initGame()
  console.log(stage.mines)
}

module.exports = stage
