import { Vector } from "Classes/Utilities/Math";
export default class GameCamera {
  constructor(game, xOffset, yOffset) {
    this.game = game;
    this.offset = new Vector(xOffset, yOffset);
    this.easing = GameCamera.DEFAULT_EASING;
  }

  move(vector) {
    this.offset = this.offset.add(vector);
  }

  centerOnEntity(entity) {
    var targetOffset = entity.position.subtract(
      new Vector(
        this.game.getWidth() / 2 - entity.size.width / 2,
        this.game.getHeight() / 2 - entity.size.height / 2
      )
    );
    this.offset = this.offset.subtract(
      this.offset.subtract(targetOffset).devide(this.easing)
    );
  }

  getOffset() {
    return this.offset;
  }
}
GameCamera.DEFAULT_EASING = 20;
