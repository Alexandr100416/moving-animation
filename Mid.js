export { Mid };
function Mid() {
  let texture = PIXI.Texture.fromImage("./resources/bg-mid.png");
  PIXI.extras.TilingSprite.call(this, texture, 512, 256);
  this.position.x = 0;
  this.position.y = 128;
  this.tilePosition.x = 0;
  this.tilePosition.y = 0;
  this.viewportX = 0;
}
Mid.prototype = Object.create(PIXI.extras.TilingSprite.prototype);
Mid.DELTA_X = 0.64;
Mid.prototype.setViewportX = function(newViewportX) {
  let distanceTravelled = newViewportX - this.viewportX;
  this.viewportX = newViewportX;
  this.tilePosition.x -= (distanceTravelled * Mid.DELTA_X);
};

// let tiker = new Tiker ( );
// app.stage.interactive = true;
// app.stage.on('pointermove', onMove)
// function onMove(event) {
//     console.log(event.data.global.x);
// }