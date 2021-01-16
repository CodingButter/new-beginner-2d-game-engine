import Creature from "./Creature";
import { Assets } from "Classes/GFX";
import { toInt, Vector } from "Classes/Utilities/Math";
export default class Player extends Creature {
  constructor(game, x, y) {
    super(game, x, y, Creature.DEFAULT_WIDTH * 2, Creature.DEFAULT_HEIGHT * 2);
    this.texture = Assets.player;
    this.speed = Creature.DEFAULT_SPEED + 25;
    this.sprint = 0;
  }

  getInput(deltaTime) {
    this.movement = new Vector(0, 0);
    this.sprint = 0;
    if (this.game.getKeyManager().shift) {
      this.sprint = 50;
    }
    if (this.game.getKeyManager().left) {
      this.movement.x = -(this.sprint + this.speed) * deltaTime;
    }

    if (this.game.getKeyManager().right) {
      this.movement.x = (this.sprint + this.speed) * deltaTime;
    }

    if (this.game.getKeyManager().up) {
      this.movement.y = -(this.sprint + this.speed) * deltaTime;
    }

    if (this.game.getKeyManager().down) {
      this.movement.y = (this.sprint + this.speed) * deltaTime;
    }
  }

  tick(deltaTime) {
    this.game.getGameCamera().centerOnEntity(this);
    this.getInput(deltaTime);
    this.move();
  }
  render(g) {
    /*g.fillStyle = "#000";
    g.fillText(`Movement:${this.movement.x},${this.movement.y}`, 5, 50);
    g.fillText(`Position:${this.position.x},${this.position.y}`, 5, 65);
    */
    var drawOffset = this.position.subtract(
      this.game.getGameCamera().getOffset()
    );
    g.drawSprite(
      this.texture.walkDown[0],
      toInt(drawOffset.x),
      toInt(drawOffset.y),
      this.size.width,
      this.size.height
    );
  }
}
