import { Entity } from "Classes/Entities";

export default class Creature extends Entity {
  constructor(health, x, y) {
    super(x, y);
    this.health = health;
  }
}
