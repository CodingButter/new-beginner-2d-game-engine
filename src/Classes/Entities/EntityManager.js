import { toInt } from "Classes/Utilities/Math";
const entities = [];

function renderSorter(a, b) {
  if (
    toInt(a.y + a.bounds.y + a.bounds.height / 2) <=
    toInt(b.y + b.bounds.y + b.bounds.height / 2)
  ) {
    return -1;
  } else {
    return 1;
  }
}
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
    entities.sort(renderSorter);
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
