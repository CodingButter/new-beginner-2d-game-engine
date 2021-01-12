CanvasRenderingContext2D.prototype.drawSprite = function (
  sheet,
  x,
  y,
  width,
  height
) {
  this.drawImage(
    sheet.sprite,
    sheet.x,
    sheet.y,
    sheet.width,
    sheet.height,
    x,
    y,
    width,
    height
  );
};

export default class SpriteSheet {
  constructor(image) {
    this.sprite = image;
  }
  crop(x, y, width, height) {
    var sprite = this.sprite;
    return { x, y, width, height, sprite };
  }
}
