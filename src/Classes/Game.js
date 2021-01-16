import { Display } from "Classes/Display";
import { Assets, GameCamera } from "Classes/GFX";
import { State, GameState, MenuState } from "Classes/States";
import Handler from "Classes/Handler";
import { KeyManager } from "Classes/Inputs";
import { Tile } from "Classes/Tiles";
//Set Private Variables
//Handler
var handler;
//Game Info
var parent, width, height, maxWidth, maxHeight, title;

//Game loop
var running, lastTime;

//Game States
var gameState, menuState;

//Render Stuffs
var display, g, gameCamera;

export default class Game {
  constructor({ parentElement, gameTitle, gameWidth, gameHeight }) {
    parent = parentElement;
    title = gameTitle;
    width = gameWidth;
    height = gameHeight;
    maxWidth = gameWidth;
    maxHeight = gameHeight;
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
    handler = new Handler(this);
    gameCamera = new GameCamera(handler, 0, 0);
    Tile.setTiles();
    //Initialize States
    menuState = new MenuState(handler);
    gameState = new GameState(handler);
    State.setState(gameState);

    //Initiate Display and getting context
    display = new Display({ handler, parent, title, width, height });
    display.setSize();
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
  getMaxHeight() {
    return maxHeight;
  }
  getMaxWidth() {
    return maxWidth;
  }
  getWidth() {
    return width;
  }
  getHeight() {
    return height;
  }
  setWidth(value) {
    width = value;
    display.getCanvas().width = value;
  }
  setHeight(value) {
    height = value;
    display.getCanvas().height = value;
  }
  getKeyManager() {
    return KeyManager;
  }
  getGameCamera() {
    return gameCamera;
  }
}
