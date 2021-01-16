const entities = [];

export default class Entity {
  constructor(game, x, y, width, height) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    entities.push(this);
  }

  tick(deltaTime) {
    console.warn("Entities Need a tick method");
  }

  render(g) {
    console.warn("Entities Need render method");
  }
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
  setX(value) {
    this.x = value;
  }
  setWidth(value) {
    this.width = value;
  }
  setHeight(value) {
    this.height = value;
  }

  //Static
  static getEntities() {
    return entities;
  }
}
