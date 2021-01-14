import { Vector } from "Classes/Utilities/Math";
const entities = [];

export default class Entity {
  constructor(x, y) {
    this.position = new Vector(x, y);
    entities.push(this);
  }

  tick(deltaTime) {
    console.warn("Entities Need a tick method");
  }

  render(g) {
    console.warn("Entities Need render method");
  }

  //Static
  static getEntities() {
    return entities;
  }
}
