const entities = [];
export default class EntityManager {
  constructor(handler, player) {
    this.handler = handler;
    this.player = player;
    this.addEntity(this.player);
  }

  tick(deltaTime) {
    entities.forEach((entity, index) => {
      entity.tick(deltaTime);
    });
  }

  render(g) {
    entities.sort((a, b) => {
      return a.y + a.bounds.y - (b.y + b.bounds.y + a.bounds.height / 2);
    });
    entities.forEach((entity, index) => {
      entity.render(g);
    });
  }

  getEntities() {
    return entities;
  }
  getHandler() {
    return this.handler;
  }
  getPlayer() {
    return this.player;
  }
  addEntity(entity) {
    entities.push(entity);
  }
  removeEntity(entity) {
    entities.splice(entities.indexOf(this), 1);
  }
}
