import { Rectangle } from "Classes/Utilities/Math";

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
    console.warn("Entities Need render method");
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

  /**
   * Returns an array of all entities
   */
  static getEntities() {
    return entities;
  }
}
