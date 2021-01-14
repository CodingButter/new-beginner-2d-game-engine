import Creature from "./Creature";

export default class Player extends Creature {
  constructor(texture, health, x, y) {
    super(health, x, y);
    this.texture = texture;
  }
}
