import { Entity } from "Classes/Entities";
import { Tile } from "Classes/Tiles";
import { toInt } from "Classes/Utilities/Math";
export default class Creature extends Entity {
  constructor(handler, x, y, width, height) {
    super(handler, x, y, width, height);
    this.health = Creature.DEFAULT_HEALTH;
    this.speed = Creature.DEFAULT_SPEED;
    this.xMove = 0;
    this.yMove = 0;
  }

  move() {
    this.moveX();
    this.moveY();
  }

  moveX() {
    if (this.xMove > 0) {
      var tx = toInt(
        (this.x + this.bounds.x + this.xMove + this.bounds.width) /
          Tile.TILEWIDTH
      );
      if (
        !this.collisionWithTile(
          tx,
          toInt((this.y + this.bounds.y) / Tile.TILEHEIGHT)
        ) &&
        !this.collisionWithTile(
          tx,
          toInt((this.y + this.bounds.y + this.bounds.height) / Tile.TILEHEIGHT)
        )
      ) {
        this.x += this.xMove;
      } else {
        this.x = tx * Tile.TILEWIDTH - this.bounds.x - this.bounds.width - 1;
      }
    }
    if (this.xMove < 0) {
      tx = toInt((this.x + this.bounds.x + this.xMove) / Tile.TILEWIDTH);
      if (
        !this.collisionWithTile(
          tx,
          toInt((this.y + this.bounds.y) / Tile.TILEHEIGHT)
        ) &&
        !this.collisionWithTile(
          tx,
          toInt((this.y + this.bounds.y + this.bounds.height) / Tile.TILEHEIGHT)
        )
      ) {
        this.x += this.xMove;
      } else {
        this.x = tx * Tile.TILEWIDTH + Tile.TILEWIDTH - this.bounds.x;
      }
    }
  }

  moveY() {
    var ty;
    if (this.yMove > 0) {
      ty = toInt(
        (this.y + this.bounds.y + this.yMove + this.bounds.height) /
          Tile.TILEHEIGHT
      );
      if (
        !this.collisionWithTile(
          toInt((this.x + this.bounds.x) / Tile.TILEWIDTH),
          ty
        ) &&
        !this.collisionWithTile(
          toInt((this.x + this.bounds.x + this.bounds.width) / Tile.TILEWIDTH),
          ty
        )
      ) {
        this.y += this.yMove;
      } else {
        this.y = ty * Tile.TILEHEIGHT - this.bounds.y - this.bounds.height - 1;
      }
    }
    if (this.yMove < 0) {
      ty = toInt((this.y + this.bounds.y + this.yMove) / Tile.TILEHEIGHT);
      if (
        !this.collisionWithTile(
          toInt((this.x + this.bounds.x) / Tile.TILEWIDTH),
          ty
        ) &&
        !this.collisionWithTile(
          toInt((this.x + this.bounds.x + this.bounds.width) / Tile.TILEWIDTH),
          ty
        )
      ) {
        this.y += this.yMove;
      } else {
        this.y = ty * Tile.TILEHEIGHT + Tile.TILEHEIGHT - this.bounds.y;
      }
    }
  }

  collisionWithTile(x, y) {
    return this.handler.getWorld().getTile(x, y).isSolid();
  }
  getHealth() {
    return this.health;
  }
  getSpeed() {
    return this.speed;
  }
  getxMove() {
    return this.xMove;
  }
  getyMove() {
    return this.yMove;
  }

  setHealth(value) {
    this.health = value;
  }
  setSpeed(value) {
    this.speed = value;
  }
  setxMove(value) {
    this.xMove = value;
  }
  setyMove(value) {
    this.yMove = value;
  }
}

Creature.DEFAULT_HEALTH = 10;
Creature.DEFAULT_SPEED = 50;
Creature.DEFAULT_WIDTH = Creature.DEFAULT_HEIGHT = 32;
