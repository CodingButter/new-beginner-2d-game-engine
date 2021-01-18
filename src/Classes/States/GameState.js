import State from "./State";

import { World } from "Classes/Worlds";
import { firstWorld } from "res/worlds";

var world;

export default class GameState extends State {
  constructor(handler) {
    super(handler);
    this.init();
  }

  init() {
    world = new World(this.handler, firstWorld);
    this.handler.setWorld(world);
  }

  tick(deltaTime) {
    world.tick(deltaTime);
  }

  render(g) {
    world.render(g);
  }

  getPlayer() {
    return world.getPlayer();
  }
}
