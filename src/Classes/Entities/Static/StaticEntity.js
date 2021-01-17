import { Entity } from "Classes/Entities";
export default class StaticEntity extends Entity {
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
  }
}
