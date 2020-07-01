import { Far } from "/Far.js";
import { Mid } from "/Mid.js";
import { Walls } from "/Walls.js";
export { Scroller };
function Scroller(stage) {
  this.far = new Far();
  stage.addChild(this.far);

  this.mid = new Mid();
  stage.addChild(this.mid);
  this.front = new Walls();
  stage.addChild(this.front);
  this.viewportX = 0;
  Scroller.prototype.setViewportX = function (viewportX) {
    this.viewportX = viewportX;
    this.far.setViewportX(viewportX);
    this.mid.setViewportX(viewportX);
  };
  Scroller.prototype.getViewportX = function () {
    return this.viewportX;
  };
  Scroller.prototype.moveViewportXBy = function (units) {
    let newViewportX = this.viewportX + units;
    this.setViewportX(newViewportX);
  };
}
