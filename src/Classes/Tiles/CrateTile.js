import { Tile } from "Classes/Tiles";
import { Assets } from "Classes/GFX";
export default class CrateTile extends Tile {
  constructor(id) {
    super(Assets.mainLevel.crate, id);
  }
  isSolid() {
    return true;
  }
}
