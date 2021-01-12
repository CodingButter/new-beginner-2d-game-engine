import { Display } from "./Display";
import { Assets } from "./GFX";

//Set Private Variables
var parent, width, height, title, running, display, g, lastTime, x;

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
    x+=60*deltaTime
  }

  //After Ticking the Render Method Displays all the updated graphics to the screen
  render() {
    //Clear Screen
    g.clearRect(0, 0, width, height);

    //Draw Stuff
    g.fillStyle = "#ccc";
    g.fillRect(0, 0, width, height);
    g.drawSprite(Assets.mainLevel.dirt, x, 0, 64, 64);
  }

  init() {
    x = 0;
    display = new Display({ parent, title, width, height });
    g = display.getContext();

    //Temp Code
    Assets.init();

    const self = this;
    const renderLoop = () => {
      self.render();
      if (running) {
        requestAnimationFrame(renderLoop);
      }
      return null;
    }
    const tickLoop = (now) => {
      if (lastTime === undefined) lastTime = now
      var deltaTime = (now - lastTime) / 1000;
      lastTime = now;
      self.tick(deltaTime);
      if (running) setTimeout(() => {
        tickLoop(Date.now());
        return null;
      }, 100)
      
      return null
    }
      tickLoop(Date.now());
      requestAnimationFrame(renderLoop);
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
