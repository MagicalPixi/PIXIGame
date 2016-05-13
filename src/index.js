/**
 * Created by zyg on 15/11/6.
 */
function guoshencheng(argument) {
  
}
var params = require('./params.js')
var pixiLib = require('pixi-lib')
var render = pixiLib.createRender(document.body)
var loader = require('./loader.js')

loader.add(params.png, 'png').add(params.json, 'json').load(function() {
  var gameStage = require('./gameStage.js')
  var startStage = require('./startStage')
  window.startPage = function() {
    startStage(render)
  }
  window.gamePage= function() {
    gameStage(render) 
  }
  gameStage(render)
})

//document.body.appendChild(renderer.view);
//var audio = document.getElementById('audio')
//audio.loop = true

