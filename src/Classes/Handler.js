export default class {
  constructor(game, world) {
    this.game = game;
    this.world = world;
  }

  //Getters and Setters
  getGame() {
    return this.game;
  }
  getWorld() {
    return this.world;
  }
  getMaxGameWidth() {
    return this.game.getMaxWidth();
  }
  getMaxGameHeight() {
    return this.game.getMaxHeight();
  }
  getWidth() {
    return this.game.getWidth();
  }

  getHeight() {
    return this.game.getHeight();
  }
  getGameCamera() {
    return this.game.getGameCamera();
  }
  getKeyManager() {
    return this.game.getKeyManager();
  }

  setGame(game) {
    this.game = game;
  }
  setWorld(world) {
    this.world = world;
  }
}
