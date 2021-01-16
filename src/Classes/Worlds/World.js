import { Tile } from "Classes/Tiles";
import { toInt } from "Classes/Utilities/Math";
export default class World {
  constructor(game, world) {
    this.game = game;
    this.loadWorld(world);
  }
  loadWorld(world) {
    this.rows = world.tiles.length;
    this.columns = world.tiles[0].length;
    this.tiles = world.tiles;
  }
  getTile(row, column) {
    var t = Tile.tiles[this.tiles[column][row]];
    if (t === undefined) return Tile.dirtTile;
    return t;
  }
  tick(deltaTime) {}
  render(g) {
    var startRow = Math.max(
      0,
      toInt(this.game.getGameCamera().getyOffset() / Tile.DEFAULT_HEIGHT)
    );
    var startColumn = Math.max(
      0,
      toInt(this.game.getGameCamera().getxOffset() / Tile.DEFAULT_WIDTH)
    );
    var endRow = Math.min(
      this.rows,
      toInt(
        (this.game.getGameCamera().getyOffset() + this.game.getHeight()) /
          Tile.DEFAULT_HEIGHT
      ) + 1
    );
    var endColumn = Math.min(
      this.columns,
      toInt(
        (this.game.getGameCamera().getxOffset() + this.game.getWidth()) /
          Tile.DEFAULT_WIDTH
      ) + 1
    );
    for (var column = startColumn; column < endColumn; column++) {
      for (var row = startRow; row < endRow; row++) {
        this.getTile(column, row).render(
          g,
          toInt(
            column * Tile.DEFAULT_WIDTH - this.game.getGameCamera().getxOffset()
          ),
          toInt(
            row * Tile.DEFAULT_HEIGHT - this.game.getGameCamera().getyOffset()
          )
        );
      }
    }
  }
}
