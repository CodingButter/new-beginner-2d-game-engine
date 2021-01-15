import { Display } from "Classes/Display";
import { Assets } from "Classes/GFX";
import { State, GameState, MenuState } from "Classes/States";
import { KeyManager } from "Classes/Inputs";
//Set Private Variables
//Game Info
var parent, width, height, title;

//Game loop
var running, lastTime;

//Game States
var gameState, menuState;

//Render Stuffs
var display, g;

export default class Game {
  constructor({ parentElement, gameTitle, gameWidth, gameHeight }) {
    parent = parentElement;
    title = gameTitle;
    width = gameWidth;
    height = gameHeight;
    running = false;
  }

  //Tick Method runs all game update logic
  tick(deltaTime) {
    KeyManager.tick();
    if (State.getState()) {
      State.getState().tick(deltaTime);
    }
  }

  //After Ticking the Render Method Displays all the updated graphics to the screen
  render(deltaTime) {
    //Clear Screen
    g.clearRect(0, 0, width, height);

    //Draw Stuff
    g.fillStyle = "#ccc";
    g.fillRect(0, 0, width, height);
    g.fillStyle = "#000";
    if (State.getState() && Assets.getTotalProgress() === 100) {
      State.getState().render(g);
    }

    /*
    //show fps
    g.font = "30px Roboto";
    g.fillText(`fps:${parseInt(1000 / (1000 * deltaTime))}`, 10, 30);
    */
  }

  init() {
    Assets.init();

    //Initialize States
    menuState = new MenuState(this);
    gameState = new GameState(this);
    State.setState(gameState);

    //Initiate Display and getting context
    display = new Display({ parent, title, width, height });
    g = display.getContext();

    const self = this;
    const loop = (now) => {
      if (lastTime === undefined) lastTime = now;
      var deltaTime = (now - lastTime) / 1000;
      lastTime = now;
      self.render(deltaTime);
      self.tick(deltaTime);
      if (running) {
        requestAnimationFrame(loop);
      }
      return null;
    };
    requestAnimationFrame(loop);
  }

  start() {
    if (running) return;
    running = true;
    this.init();
  }
  stop() {
    running = false;
  }

  //Getters
  getKeyManager() {
    return KeyManager;
  }
}
