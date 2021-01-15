export default class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  add(vector) {
    const newVector = new Vector(this.x + vector.x, this.y + vector.y);
    this.x = newVector.x;
    this.y = newVector.y;
  }
  subtract(vector) {
    const newVector = new Vector(this.x - vector.x, this.y - vector.y);
    this.x = newVector.x;
    this.y = newVector.y;
  }
  multiply(vector) {
    const newVector = new Vector(this.x * vector.x, this.y * vector.y);
    this.x = newVector.x;
    this.y = newVector.y;
  }
  devide(vector) {
    const newVector = new Vector(this.x / vector.x, this.y / vector.y);
    this.x = newVector.x;
    this.y = newVector.y;
  }
}
