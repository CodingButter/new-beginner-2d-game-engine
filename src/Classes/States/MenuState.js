import { Assets } from "../GFX";
import State from "./State";

export default class MenuState extends State {
  constructor() {
    super();
  }
  tick(deltaTime) {}

  render(g) {
    g.drawSprite(
      Assets.mainLevel.dirt,
      0,
      0,
      Assets.mainLevel.dirt.width,
      Assets.mainLevel.dirt.height
    );
  }
}
