import { Tile } from "Classes/Tiles";
import { toInt } from "Classes/Utilities/Math";
import { EntityManager } from "Classes/Entities";
import { Player } from "Classes/Entities/Creatures";
export default class World {
  constructor(handler, world) {
    this.handler = handler;
    this.entityManager = new EntityManager(handler, new Player(handler, 0, 0));
    this.loadWorld(world);
    this.entityManager.getPlayer().setX(this.spawnX);
    this.entityManager.getPlayer().setY(this.spawnY);
  }
  loadWorld(world) {
    var self = this;
    this.height = world.tiles.length;
    this.width = world.tiles[0].length;
    this.tiles = world.tiles;
    this.spawnX = world.spawn.x * Tile.TILEWIDTH;
    this.spawnY = world.spawn.y * Tile.TILEHEIGHT;
    this.staticEntities = world.staticEntities.map((entity) => {
      var entityType = entity.entityType();
      entityType.setX(entity.x * Tile.TILEWIDTH);
      entityType.setY(entity.y * Tile.TILEHEIGHT);
      entityType.setHandler(self.handler);
      self.entityManager.addEntity(entityType);
    });
  }

  tick(deltaTime) {
    this.entityManager.tick(deltaTime);
  }
  render(g) {
    //Render Tiles
    var startY = Math.max(
      0,
      toInt(this.handler.getGameCamera().getyOffset() / Tile.TILEHEIGHT)
    );
    var startX = Math.max(
      0,
      toInt(this.handler.getGameCamera().getxOffset() / Tile.TILEWIDTH)
    );
    var endY = Math.min(
      this.height,
      toInt(
        (this.handler.getGameCamera().getyOffset() + this.handler.getHeight()) /
          Tile.TILEHEIGHT
      ) + 1
    );
    var endX = Math.min(
      this.width,
      toInt(
        (this.handler.getGameCamera().getxOffset() + this.handler.getWidth()) /
          Tile.TILEWIDTH
      ) + 1
    );
    for (var x = startX; x < endX; x++) {
      for (var y = startY; y < endY; y++) {
        this.getTile(x, y).render(
          g,
          toInt(x * Tile.TILEWIDTH - this.handler.getGameCamera().getxOffset()),
          toInt(y * Tile.TILEHEIGHT - this.handler.getGameCamera().getyOffset())
        );
      }
    }

    //Render entities
    this.entityManager.render(g);
  }
  //Getters

  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
  getTile(x, y) {
    if (x < 0 || x > this.width || y < 0 || y > this.height)
      return Tile.grassTile;
    var t = Tile.tiles[this.tiles[y][x]];
    if (t === undefined) return Tile.dirtTile;
    return t;
  }
  getEntityManager() {
    return this.entityManager;
  }
  getPlayer() {
    return this.entityManager.getPlayer();
  }
}
