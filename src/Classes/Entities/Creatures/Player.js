import Creature from "./Creature";
import { Assets } from "Classes/GFX";
import { toInt } from "Classes/Utilities/Math";
export default class Player extends Creature {
  constructor(game, x, y) {
    super(game, x, y, Creature.DEFAULT_WIDTH * 2, Creature.DEFAULT_HEIGHT * 2);
    this.texture = Assets.player;
    this.speed = Creature.DEFAULT_SPEED + 50;
    this.sprint = 0;
  }

  getInput(deltaTime) {
    this.moveX = 0;
    this.moveY = 0;
    this.sprint = 0;
    if (this.game.getKeyManager().shift) {
      this.sprint = 50;
    }
    if (this.game.getKeyManager().left) {
      this.moveX = -(this.sprint + this.speed) * deltaTime;
    }

    if (this.game.getKeyManager().right) {
      this.moveX = (this.sprint + this.speed) * deltaTime;
    }

    if (this.game.getKeyManager().up) {
      this.moveY = -(this.sprint + this.speed) * deltaTime;
    }

    if (this.game.getKeyManager().down) {
      this.moveY = (this.sprint + this.speed) * deltaTime;
    }
  }

  tick(deltaTime) {
    this.game.getGameCamera().centerOnEntity(this);
    this.getInput(deltaTime);
    this.move();
  }
  render(g) {
    /*g.fillStyle = "#000";
    g.fillText(`Movement:${this.moveX},${this.moveY}`, 5, 50);
    g.fillText(`Position:${this.position.x},${this.position.y}`, 5, 65);
    */

    g.drawSprite(
      this.texture.walkDown[0],
      toInt(this.x - this.game.getGameCamera().getxOffset()),
      toInt(this.y - this.game.getGameCamera().getyOffset()),
      this.width,
      this.height
    );
  }
}
