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
  var farTexture = PIXI.Texture.fromImage("./resources/bg-far.png");
  far = new Far(farTexture, 512, 256);
  stage.addChild(far);
  var midTexture = PIXI.Texture.fromImage("./resources/bg-mid.png");
  mid = new Mid(midTexture, 512, 256);
  mid.position.x = 0;
  mid.position.y = 128;
  mid.tilePosition.x = 0;
  mid.tilePosition.y = 0;
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
