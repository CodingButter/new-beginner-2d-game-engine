import { Assets } from "../GFX";
import State from "./State";

export default class GameState extends State {
  constructor() {
    super();
  }
  tick(deltaTime) {}

  render(g) {
    g.drawSprite(
      Assets.mainLevel.fall_tree,
      0,
      0,
      Assets.mainLevel.fall_tree.width,
      Assets.mainLevel.fall_tree.height
    );
  }
}
