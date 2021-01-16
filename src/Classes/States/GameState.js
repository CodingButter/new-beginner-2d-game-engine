import State from "./State";
import { Player } from "Classes/Entities/Creatures";
import { World } from "Classes/Worlds";
import { firstWorld } from "res/worlds";
import { Tile } from "Classes/Tiles";
var player, world;
export default class GameState extends State {
  constructor(handler) {
    super(handler);
    this.init();
  }

  init() {
    world = new World(this.handler, firstWorld);
    this.handler.setWorld(world);
    player = new Player(
      this.handler,
      firstWorld.spawn.x * Tile.TILEWIDTH,
      firstWorld.spawn.y * Tile.TILEHEIGHT
    );
  }

  tick(deltaTime) {
    world.tick(deltaTime);
    player.tick(deltaTime);
  }

  render(g) {
    world.render(g);
    player.render(g);
  }
}
