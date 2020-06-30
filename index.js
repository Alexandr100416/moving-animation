import { Far } from "/Far.js";
import { Mid } from "/Mid.js";
let far;
let mid;
let renderer;
let stage;
function init() {
  stage = new PIXI.Container();
  renderer = PIXI.autoDetectRenderer(512, 384, {
    view: document.getElementById("game-canvas"),
  });
  far = new Far();
  stage.addChild(far);
  mid = new Mid();
  stage.addChild(mid);
  requestAnimationFrame(update);
}
function update() {
  far.tilePosition.x -= 0.128;
  mid.tilePosition.x -= 0.64;
  renderer.render(stage);
  requestAnimationFrame(update);
}
init();
