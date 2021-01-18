import { Entity } from "Classes/Entities";
import { Tile } from "Classes/Tiles";
import { toInt } from "Classes/Utilities/Math";

const creatures = [];

export default class Creature extends Entity {
  /**
   *
   * @param {Handler} handler
   * @param {Float} x
   * @param {Float} y
   * @param {Integer} width
   * @param {Integer} height
   */
  constructor(handler, x, y, width, height) {
    super(handler, x, y, width, height);
    this.creatureId = creatures.length;
    creatures.push(this);
    this.health = Creature.DEFAULT_HEALTH;
    this.speed = Creature.DEFAULT_SPEED;
    this.xMove = 0;
    this.yMove = 0;
  }

  /**
   * Move creature along the x and y
   */
  move() {
    if (!this.checkEntityCollisions(this.xMove, 0)) {
      this.moveX();
    }
    if (!this.checkEntityCollisions(0, this.yMove)) {
      this.moveY();
    }
  }

  /**
   * Check for collisions then move Creature along the x axis
   */
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

  /**
   * Check for collisions then move Creature alon the y axis
   */
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

  render(g) {
    super.render(g);
  }
  /**
   * Returns a whether the current x and y intercects a solid tile
   * @param {Float} x
   * @param {Float} y
   *
   * @returns {Boolean}
   */
  collisionWithTile(x, y) {
    return this.handler.getWorld().getTile(x, y).isSolid();
  }

  /**
   * returns the current health of the creature
   * @returns {Float}
   */
  getHealth() {
    return this.health;
  }

  /**
   * returns the current speed of the creature
   * @returns {Float}
   */
  getSpeed() {
    return this.speed;
  }

  /**
   * returns the current xspeed of the creature
   * @returns {Float}
   */
  getxMove() {
    return this.xMove;
  }

  /**
   * returns the current y speed of the creature
   * @returns {Float}
   */
  getyMove() {
    return this.yMove;
  }

  /**
   * Sets the health of the current creature
   * @param {Float} health
   */
  setHealth(health) {
    this.health = health;
  }

  /**
   * Sets the speed of the Creature
   * @param {Float} speed
   */
  setSpeed(speed) {
    this.speed = speed;
  }

  /**
   * sets the x movement speed of the creature
   * @param {Float} xmove
   */
  setxMove(xmove) {
    this.xMove = xmove;
  }

  /**
   * sets the y movement speed of the creature
   * @param {Float} ymove
   */
  setyMove(ymove) {
    this.yMove = ymove;
  }

  /**
   * decrements the Creature health by the damage amount
   * @param {Float} damage
   */
  takeDamage(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      this.die();
    }
  }

  /**
   * kills creature and removes it from the entities array.
   */
  die() {
    creatures.splice(this.creatureId);
    super.remove();
  }
  getAbsoluteSpeed() {
    return Math.sqrt(this.xMove * this.xMove + this.yMove * this.yMove);
  }
  getMovementDirection() {
    if (this.xMove === 0 && this.yMove < 0) {
      return "Up";
    }
    if (this.xMove > 0 && this.yMove < 0) {
      return "UpRight";
    }
    if (this.xMove > 0 && this.yMove === 0) {
      return "Right";
    }
    if (this.xMove > 0 && this.yMove > 0) {
      return "DownRight";
    }
    if (this.xMove === 0 && this.yMove > 0) {
      return "Down";
    }
    if (this.xMove < 0 && this.yMove > 0) {
      return "DownLeft";
    }
    if (this.xMove < 0 && this.yMove === 0) {
      return "Left";
    }
    if (this.xMove < 0 && this.yMove < 0) {
      return "UpLeft";
    }
    return "Idle";
  }
}

Creature.DEFAULT_HEALTH = 10;
Creature.DEFAULT_SPEED = 50;
Creature.DEFAULT_WIDTH = Creature.DEFAULT_HEIGHT = 32;
