import { Entity } from "Classes/Entities";
import { Vector } from "Classes/Utilities/Math";
export default class Creature extends Entity {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.health = Creature.DEFAULT_HEALTH;
    this.speed = Creature.DEFAULT_SPEED;
    this.movement = new Vector(0, 0);
  }

  move() {
    this.position.add(this.movement);
  }

  getHealth() {
    return this.health;
  }
  getSpeed() {
    return this.speed;
  }
  getMovement() {
    return this.movement;
  }

  setHealth(value) {
    this.health = value;
  }
  setSpeed(value) {
    this.speed = value;
  }
  setMovement(vector) {
    this.movement = vector;
  }
}

Creature.DEFAULT_HEALTH = 10;
Creature.DEFAULT_SPEED = 50;
Creature.DEFAULT_WIDTH = Creature.DEFAULT_HEIGHT = 32;
