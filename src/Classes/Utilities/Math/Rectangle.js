export default class Rectangle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  intersects(rectangle) {
    var aLeftOfB = this.x + this.width < rectangle.x;
    var aRightOfB = this.x > rectangle.x + rectangle.width;
    var aAboveB = this.y > rectangle.y + rectangle.height;
    var aBelowB = this.y + this.height < rectangle.y;

    return !(aLeftOfB || aRightOfB || aAboveB || aBelowB);
  }
}
