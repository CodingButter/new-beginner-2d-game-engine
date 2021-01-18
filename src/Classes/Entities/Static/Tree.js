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
    this.bounds.height = this.height / 4;
    this.bounds.width = this.width / 3.5;
    this.bounds.x = this.width / 2.8;
    this.bounds.y = this.height - this.bounds.height;
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
    super.render(g);
  }
}
