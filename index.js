import { Far } from "/Far.js"
import { Mid } from "/Mid.js"
import {Scroller} from "/Scroller.js"
let scroller;
let renderer;
let stage;
function init() {
  stage = new PIXI.Container();
  renderer = PIXI.autoDetectRenderer(512, 384, {
    view: document.getElementById("game-canvas"),
  });
  scroller = new Scroller(stage);
  requestAnimationFrame(update);
}
function update() {
  scroller.update();
  renderer.render(stage);
  requestAnimationFrame(update);
}
init();
