var currentState = null;

export default class State {
  //CLASS
  constructor(game) {
    this.game = game;
  }

  /**
   * @override
   **/
  tick(deltaTime) {
    console.warn("All States Must Contain a tick");
  }

  /**
   * @override
   **/
  render(g) {
    console.warn("All States Must Contain a render");
  }

  static setState(state) {
    currentState = state;
  }

  static getState() {
    return currentState;
  }
}
