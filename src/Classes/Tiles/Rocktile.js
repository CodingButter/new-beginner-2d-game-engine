import { Tile } from "Classes/Tiles";
import { Assets } from "Classes/GFX";
export default class RockTile extends Tile {
  constructor(id) {
    super(Assets.mainLevel.rock, id);
  }
  /**
   * @override
   */
  isSolid() {
    return true;
  }
}
