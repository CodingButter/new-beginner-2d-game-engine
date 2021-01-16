import { Entity } from "Classes/Entities";
export default class Creature extends Entity {
  constructor(game, x, y, width, height) {
    super(game, x, y, width, height);
    this.health = Creature.DEFAULT_HEALTH;
    this.speed = Creature.DEFAULT_SPEED;
    this.moveX = 0;
    this.moveY = 0;
  }

  move() {
    this.x += this.moveX;
    this.y += this.moveY;
  }

  getHealth() {
    return this.health;
  }
  getSpeed() {
    return this.speed;
  }
  getMoveX() {
    return this.moveX;
  }
  getMoveY() {
    return this.moveY;
  }

  setHealth(value) {
    this.health = value;
  }
  setSpeed(value) {
    this.speed = value;
  }
  setMoveX(value) {
    this.moveX = value;
  }
  setMoveY(value) {
    this.moveY = value;
  }
}

Creature.DEFAULT_HEALTH = 10;
Creature.DEFAULT_SPEED = 50;
Creature.DEFAULT_WIDTH = Creature.DEFAULT_HEIGHT = 32;
