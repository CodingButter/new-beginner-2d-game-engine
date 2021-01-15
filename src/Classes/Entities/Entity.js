import { Vector } from "Classes/Utilities/Math";
const entities = [];

export default class Entity {
  constructor(game, x, y, width, height) {
    this.game = game;
    this.position = new Vector(x, y);
    this.size = { width, height };
    entities.push(this);
  }

  tick(deltaTime) {
    console.warn("Entities Need a tick method");
  }

  render(g) {
    console.warn("Entities Need render method");
  }

  getPosition() {
    return this.position;
  }
  getSize() {
    return this.size;
  }
  setPosition(vector) {
    this.position = vector;
  }
  setSize({ width, height }) {
    this.size.width = width || this.size.width;
    this.size.height = height || this.size.height;
  }

  //Static
  static getEntities() {
    return entities;
  }
}
