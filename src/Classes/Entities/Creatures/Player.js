import Creature from "./Creature";
import { Assets } from "Classes/GFX";
import { toInt } from "Classes/Utilities/Math";
export default class Player extends Creature {
  constructor(handler, x, y) {
    super(handler, x, y, Creature.DEFAULT_WIDTH, Creature.DEFAULT_HEIGHT);
    this.bounds.x = this.width / 2.5;
    this.bounds.y = this.height - this.height / 2.5;
    this.bounds.width = this.width / 4;
    this.bounds.height = this.height / 4;
    this.texture = Assets.player;
    this.speed = Creature.DEFAULT_SPEED + 50;
    this.sprint = 0;
  }

  getInput(deltaTime) {
    this.xMove = 0;
    this.yMove = 0;
    this.sprint = 0;
    if (this.handler.getKeyManager().shift) {
      this.sprint = 100;
    }

    if (this.handler.getKeyManager().left) {
      this.xMove = -(this.sprint + this.speed) * deltaTime;
    }

    if (this.handler.getKeyManager().right) {
      this.xMove = (this.sprint + this.speed) * deltaTime;
    }

    if (this.handler.getKeyManager().up) {
      this.yMove = -(this.sprint + this.speed) * deltaTime;
    }

    if (this.handler.getKeyManager().down) {
      this.yMove = (this.sprint + this.speed) * deltaTime;
    }
  }

  tick(deltaTime) {
    this.handler.getGameCamera().centerOnEntity(this);
    this.getInput(deltaTime);
    this.move();
  }
  render(g) {
    /*g.fillStyle = "#000";
    g.fillText(`Movement:${this.xMove},${this.yMove}`, 5, 50);
    g.fillText(`Position:${this.position.x},${this.position.y}`, 5, 65);
    */
    var drawX = toInt(this.x - this.handler.getGameCamera().getxOffset());
    var drawY = toInt(this.y - this.handler.getGameCamera().getyOffset());
    g.drawSprite(
      this.texture.walkDown[0],
      drawX,
      drawY,
      this.width,
      this.height
    );
    g.fillStyle = "#333300";
    g.globalAlpha = 0.4;
    g.fillRect(
      drawX + this.bounds.x,
      drawY + this.bounds.y,
      this.bounds.width,
      this.bounds.height
    );
    g.globalAlpha = 1;
  }
}
