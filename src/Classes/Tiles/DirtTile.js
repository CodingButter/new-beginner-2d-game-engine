import { Tile } from "Classes/Tiles";
import { Assets } from "Classes/GFX";
export default class DirtTile extends Tile {
  constructor(id) {
    super(Assets.mainLevel.dirt, id);
  }
}
