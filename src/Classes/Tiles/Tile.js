import { GrassTile, DirtTile, RockTile } from "Classes/Tiles";
class Tile {
  constructor(texture, id) {
    this.id = id;
    this.texture = texture;
    Tile.tiles[id] = this;
  }

  tick(deltaTime) {}
  render(g, x, y) {
    g.drawSprite(this.texture[0], x, y, Tile.TILEWIDTH, Tile.TILEHEIGHT);
  }

  isSolid() {
    return false;
  }

  getId() {
    return this.id;
  }
}

Tile.tiles = [];
Tile.setTiles = () => {
  Tile.grassTile = new GrassTile(0);
  Tile.dirtTile = new DirtTile(1);
  Tile.rockTile = new RockTile(2);
};
Tile.TILEWIDTH = Tile.TILEHEIGHT = 32;

export default Tile;
