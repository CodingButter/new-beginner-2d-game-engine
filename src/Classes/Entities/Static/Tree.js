import { StaticEntity } from "Classes/Entities/Static";
import { toInt } from "Classes/Utilities/Math";
import { Assets } from "Classes/GFX";
export default class Tree extends StaticEntity {
  /**
   * Tree class constructor
   * @param {Handler} handler
   * @param {Float} x
   * @param {Float} y
   */
  constructor(handler, x, y) {
    super(
      handler,
      x,
      y,
      Assets.mainLevel.fall_tree[0].width,
      Assets.mainLevel.fall_tree[0].height
    );
  }

  /**
   * @Override
   * @param {deltatTime} deltaTime
   */
  tick(deltaTime) {}

  /**
   * @Override
   * @param {canvasRenderContext2d} g
   */
  render(g) {
    g.drawSprite(
      Assets.mainLevel.fall_tree[0],
      toInt(this.x - this.handler.getGameCamera().getxOffset()),
      toInt(this.y - this.handler.getGameCamera().getyOffset()),
      this.width,
      this.height
    );
  }
}
