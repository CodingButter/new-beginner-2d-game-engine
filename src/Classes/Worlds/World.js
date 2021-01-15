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
    for (var column = 0; column < this.columns; column++) {
      for (var row = 0; row < this.rows; row++) {
        this.getTile(column, row).render(
          g,
          toInt(
            column * Tile.DEFAULT_WIDTH -
              this.game.getGameCamera().getOffset().x
          ),
          toInt(
            row * Tile.DEFAULT_HEIGHT - this.game.getGameCamera().getOffset().y
          )
        );
      }
    }
  }
}
