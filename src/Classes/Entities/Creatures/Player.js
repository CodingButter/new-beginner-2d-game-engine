import Creature from "./Creature";
import { Assets } from "Classes/GFX";
import { toInt, Vector } from "Classes/Utilities/Math";
export default class Player extends Creature {
  constructor(game, x, y) {
    super(x, y, Creature.DEFAULT_WIDTH, Creature.DEFAULT_HEIGHT);
    this.game = game;
    this.texture = Assets.player;
    this.speed = Creature.DEFAULT_SPEED;
  }

  getInput(deltaTime) {
    this.movement = new Vector(0, 0);
    if (this.game.getKeyManager().left) {
      this.movement.x = -this.speed * deltaTime;
    }

    if (this.game.getKeyManager().right) {
      this.movement.x = this.speed * deltaTime;
    }

    if (this.game.getKeyManager().up) {
      this.movement.y = -this.speed * deltaTime;
    }

    if (this.game.getKeyManager().down) {
      this.movement.y = this.speed * deltaTime;
    }
  }

  tick(deltaTime) {
    this.getInput(deltaTime);
    this.move();
  }
  render(g) {
    /*g.fillStyle = "#000";
    g.fillText(`Movement:${this.movement.x},${this.movement.y}`, 5, 50);
    g.fillText(`Position:${this.position.x},${this.position.y}`, 5, 65);
    */
    g.drawSprite(
      this.texture.walkDown[0],
      toInt(this.position.x),
      toInt(this.position.y),
      this.size.width,
      this.size.height
    );
  }
}
