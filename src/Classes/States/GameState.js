import State from "./State";
import { Player } from "Classes/Entities/Creatures";
import { Tile } from "Classes/Tiles";
var player;
export default class GameState extends State {
  constructor(game) {
    super(game);
    this.init();
  }

  init() {
    player = new Player(this.game, 10, 10);
  }

  tick(deltaTime) {
    player.tick(deltaTime);
  }

  render(g) {
    Tile.tiles[2].render(g, 0, 0);
    player.render(g);
  }
}
