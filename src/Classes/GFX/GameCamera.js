export default class GameCamera {
  constructor(game, xOffset, yOffset) {
    this.game = game;
    this.xOffset = 0;
    this.yOffset = 0;
    this.easing = GameCamera.DEFAULT_EASING;
  }

  move(x, y) {
    this.xOffset -= (this.xOffset - x) / this.easing;
    this.yOffset -= (this.yOffset - y) / this.easing;
  }

  centerOnEntity(entity) {
    this.move(
      entity.x - this.game.getWidth() / 2 - entity.width / 2,
      entity.y - this.game.getHeight() / 2 - entity.height / 2
    );
  }

  getxOffset() {
    return this.xOffset;
  }
  getyOffset() {
    return this.xOffset;
  }
}
GameCamera.DEFAULT_EASING = 20;
