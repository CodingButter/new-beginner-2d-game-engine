import { Rectangle } from "Classes/Utilities/Math";
import { toInt } from "Classes/Utilities/Math";
const entities = [];

export default class Entity {
  /**
   * Entity class constructor
   * @param {Handler} handler
   * @param {Float} x
   * @param {Float} y
   * @param {Integer} width
   * @param {Integer} height
   */
  constructor(handler, x, y, width, height) {
    this.handler = handler;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.bounds = new Rectangle(0, 0, width, height);
    this.entityId = entities.length;
    entities.push(this);
  }

  /**
   * Override this tick method
   * @Override
   * @param {DeltaTime} deltaTime
   */
  tick(deltaTime) {
    console.warn("Entities Need a tick method");
  }

  /**
   * Override this render method
   * @Override
   * @param {CanvasRenderingContext2D} g
   */
  render(g) {
    if (this.handler.getStatsVisibility()) {
      g.fillStyle = "#333";
      g.fillRect(
        this.x + this.bounds.x - this.handler.getGameCamera().getxOffset(),
        this.y + this.bounds.y - this.handler.getGameCamera().getyOffset(),
        this.bounds.width,
        this.bounds.height
      );
      g.strokeStyle = "#fff";
      g.strokeRect(
        this.x + this.bounds.x - this.handler.getGameCamera().getxOffset(),
        this.y + this.bounds.y - this.handler.getGameCamera().getyOffset(),
        this.bounds.width,
        this.bounds.height
      );
    }
  }

  checkEntityCollisions(xOffset, yOffset) {
    var colliding = false;
    this.handler
      .getWorld()
      .getEntityManager()
      .getEntities()
      .forEach((entity) => {
        if (this !== entity) {
          if (
            entity
              .getCollisionBounds(0, 0)
              .intersects(this.getCollisionBounds(xOffset, yOffset))
          ) {
            colliding = true;
          }
        }
      });
    return colliding;
  }

  getCollisionBounds(xOffset, yOffset) {
    return new Rectangle(
      toInt(this.x + this.bounds.x + xOffset),
      toInt(this.y + this.bounds.y + yOffset),
      this.bounds.width,
      this.bounds.height
    );
  }

  /**
   * Returns an entieis x position
   */
  getX() {
    return this.x;
  }

  /**
   * Returns an entiteis y position
   */
  getY() {
    return this.y;
  }

  /**
   * Returns an entities width
   */
  getWidth() {
    return this.width;
  }

  /**
   * Returns an entities height
   */
  getHeight() {
    return this.height;
  }

  /**
   * Sets an entities x position
   * @param {Float} x
   */
  setX(x) {
    this.x = x;
  }

  /**
   * Sets an entities y position
   * @param {Float} y
   */
  setY(y) {
    this.y = y;
  }

  /**
   * Sets an entities width
   * @param {Integer} width
   */
  setWidth(width) {
    this.width = width;
  }

  /**
   * Sets an entities height
   * @param {Integer} height
   */
  setHeight(height) {
    this.height = height;
  }
  setHandler(handler) {
    this.handler = handler;
  }

  /**
   * Removes entity from the entities array
   */
  remove() {
    entities.splice(this.entityId, 1);
  }

  /**
   * Returns an array of all entities
   */
  static getEntities() {
    return entities;
  }
}
