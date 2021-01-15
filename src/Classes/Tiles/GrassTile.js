import { Tile } from "Classes/Tiles";
import { Assets } from "Classes/GFX";
export default class GrassTile extends Tile {
  constructor(id) {
    super(Assets.mainLevel.grass, id);
  }
}
