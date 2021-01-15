import State from "./State";
import { Player } from "Classes/Entities/Creatures";
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
    player.render(g);
  }
}
