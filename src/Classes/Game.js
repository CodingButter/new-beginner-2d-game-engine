import { Display } from "Classes/Display";
import { Assets } from "Classes/GFX";
import { State, GameState, MenuState } from "Classes/States";
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
    if (State.getState()) {
      State.getState().render(g);
    }

    /*
    //show fps
    g.font = "30px Roboto";
    g.fillText(`fps:${parseInt(1000 / (1000 * deltaTime))}`, 10, 30);
    */
  }

  init() {
    //Initialize States
    menuState = new MenuState();
    gameState = new GameState();
    State.setState(gameState);

    //Initiate Display and getting context
    display = new Display({ parent, title, width, height });
    g = display.getContext();

    //Temp Code
    Assets.init();

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
}
