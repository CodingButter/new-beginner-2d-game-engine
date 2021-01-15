export default class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  add(vector) {
    if (typeof vector !== "object") vector = new Vector(vector, vector);
    return new Vector(this.x + vector.x, this.y + vector.y);
  }
  subtract(vector) {
    if (typeof vector !== "object") vector = new Vector(vector, vector);
    return new Vector(this.x - vector.x, this.y - vector.y);
  }
  multiply(vector) {
    if (typeof vector !== "object") vector = new Vector(vector, vector);
    return new Vector(this.x * vector.x, this.y * vector.y);
  }
  devide(vector) {
    if (typeof vector !== "object") vector = new Vector(vector, vector);
    return new Vector(this.x / vector.x, this.y / vector.y);
  }
}
