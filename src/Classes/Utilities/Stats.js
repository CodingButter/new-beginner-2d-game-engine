import { toInt } from "Classes/Utilities/Math";
import { KeyManager } from "Classes/Inputs";
const stats = [];
var showStats = false;
class Stat {
  constructor(label, callback) {
    stats.push(this);
    this.color = "#fff";
    this.label = label;
    this.x = 10;
    this.y = 10 + (stats.length % 10) * 25;
    this.callback = callback;
  }
  render(g) {
    g.globalAlpha = 0.4;
    g.fillStyle = "#000";
    g.fillRect(this.x - 5, this.y - 18, 130, 24);
    g.globalAlpha = 1;
    g.fillStyle = this.color;
    g.font = "20px Roboto";
    g.fillText(`${this.label}: ${this.callback()}`, this.x, this.y, 120);
  }
}

export default class Stats {
  constructor(handler) {
    this.handler = handler;
    this.init();
  }

  init() {
    KeyManager.keyPressedTrigger("À", () => {
      console.log("test");
      showStats = !showStats;
    });
    new Stat("Physics FPS", () => {
      return toInt(this.handler.getPhysicsFramesPerSecond());
    });
    new Stat("Game Width", () => {
      return this.handler.getWidth();
    });
    new Stat("Game Height", () => {
      return this.handler.getHeight();
    });
    new Stat("Player X", () => {
      return toInt(this.handler.getState().getPlayer().x);
    });

    new Stat("Player Y", () => {
      return toInt(this.handler.getState().getPlayer().y);
    });
  }

  /**
   * Runs as often as possible!!!
   * @param {DeltaTime} deltaTime
   */

  /**
   * displays things to the canvas
   * @param {CanvasRenderingContext2D} g
   */
  render(g) {
    if (showStats) {
      stats.forEach((stat) => {
        stat.render(g);
      });
    }
  }
  getStatsVisibility() {
    return showStats;
  }
}
