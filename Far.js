export { Far };

function Far(texture, width, height) {
  PIXI.extras.TilingSprite.call(this, texture, width, height);
  this.position.x = 0;
  this.position.y = 0;
  this.tilePosition.x = 0;
  this.tilePosition.y = 0;
}
Far.prototype = Object.create(PIXI.extras.TilingSprite.prototype);
