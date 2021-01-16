import { Tile } from "Classes/Tiles";

export default class GameCamera {
  constructor(handler, xOffset, yOffset) {
    this.handler = handler;
    this.xOffset = xOffset;
    this.yOffset = yOffset;
    this.easing = GameCamera.DEFAULT_EASING;
  }

  move(x, y) {
    this.xOffset -= (this.xOffset - x) / this.easing;
    this.yOffset -= (this.yOffset - y) / this.easing;
    if (Math.abs(this.xOffset - x) < 1) this.xOffset = x;
    if (Math.abs(this.yOffset - y) < 1) this.yOffset = y;
    this.checkBlankSpaces();
  }

  checkBlankSpaces() {
    if (this.xOffset < 0) this.xOffset = 0;
    if (this.yOffset < 0) this.yOffset = 0;
    if (
      this.xOffset >
      this.handler.getWorld().getWidth() * Tile.TILEWIDTH -
        this.handler.getWidth()
    )
      this.xOffset =
        this.handler.getWorld().getWidth() * Tile.TILEWIDTH -
        this.handler.getWidth();
    if (
      this.yOffset >
      this.handler.getWorld().getHeight() * Tile.TILEHEIGHT -
        this.handler.getHeight()
    )
      this.yOffset =
        this.handler.getWorld().getHeight() * Tile.TILEHEIGHT -
        this.handler.getHeight();
  }
  centerOnEntity(entity) {
    this.move(
      entity.x + entity.width / 2 - this.handler.getWidth() / 2,
      entity.y + entity.height / 2 - this.handler.getHeight() / 2
    );
  }

  getxOffset() {
    return this.xOffset;
  }
  getyOffset() {
    return this.yOffset;
  }
}
GameCamera.DEFAULT_EASING = 15;
