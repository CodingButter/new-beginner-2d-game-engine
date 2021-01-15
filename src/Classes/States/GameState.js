import State from "./State";
import { Player } from "Classes/Entities/Creatures";
import { World } from "Classes/Worlds";
import { firstWorld } from "res/worlds";
import { Tile } from "Classes/Tiles";
var player, world;
export default class GameState extends State {
  constructor(game) {
    super(game);
    this.init();
  }

  init() {
    player = new Player(
      this.game,
      firstWorld.spawn.x * Tile.DEFAULT_WIDTH,
      firstWorld.spawn.y * Tile.DEFAULT_HEIGHT
    );
    world = new World(this.game, firstWorld);
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
