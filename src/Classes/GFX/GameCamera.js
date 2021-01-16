export default class GameCamera {
  constructor(game, xOffset, yOffset) {
    this.game = game;
    this.xOffset = xOffset;
    this.yOffset = yOffset;
    this.easing = GameCamera.DEFAULT_EASING;
  }

  move(x, y) {
    console.log(x, y);
    this.xOffset -= (this.xOffset - x) / this.easing;
    this.yOffset -= (this.yOffset - y) / this.easing;
  }

  centerOnEntity(entity) {
    this.move(
      entity.x + entity.width / 2 - this.game.getWidth() / 2,
      entity.y + entity.height / 2 - this.game.getHeight() / 2
    );
  }

  getxOffset() {
    return this.xOffset;
  }
  getyOffset() {
    return this.yOffset;
  }
}
GameCamera.DEFAULT_EASING = 20;
