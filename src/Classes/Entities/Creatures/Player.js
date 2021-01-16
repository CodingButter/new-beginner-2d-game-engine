import Creature from "./Creature";
import { Animation, Assets } from "Classes/GFX";
import { toInt } from "Classes/Utilities/Math";
import { miliToFPS, fpsToMili } from "Classes/Utilities";
export default class Player extends Creature {
  constructor(handler, x, y) {
    super(
      handler,
      x,
      y,
      Creature.DEFAULT_WIDTH * 2,
      Creature.DEFAULT_HEIGHT * 2
    );
    this.bounds.x = this.width / 2.5;
    this.bounds.y = this.height - this.height / 2.5;
    this.bounds.width = this.width / 4;
    this.bounds.height = this.height / 4;
    this.texture = Assets.player;
    this.speed = Creature.DEFAULT_SPEED + 50;
    this.sprint = 0;

    //Animation
    var fps = 8;
    this.animations = {
      Idle: new Animation(fpsToMili(fps), Assets.player.idle),
      walkUp: new Animation(fpsToMili(fps), Assets.player.walkUp),
      walkUpRight: new Animation(fpsToMili(fps), Assets.player.walkUpRight),
      walkRight: new Animation(fpsToMili(fps), Assets.player.walkRight),
      walkDownRight: new Animation(fpsToMili(fps), Assets.player.walkDownRight),
      walkDown: new Animation(fpsToMili(fps), Assets.player.walkDown),
      walkDownLeft: new Animation(fpsToMili(fps), Assets.player.walkDownLeft),
      walkLeft: new Animation(fpsToMili(fps), Assets.player.walkLeft),
      walkUpLeft: new Animation(fpsToMili(fps), Assets.player.walkUpLeft)
    };
    this.currentAnimation = this.animations.walkDown;
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
    this.setCurrentAnimation();
    this.currentAnimation.tick(deltaTime, -this.sprint / 10);

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
      this.getCurrentAnimationFrame(),
      drawX,
      drawY,
      this.width,
      this.height
    );
    /*g.fillStyle = "#333300";
    g.globalAlpha = 0.4;
    g.fillRect(
      drawX + this.bounds.x,
      drawY + this.bounds.y,
      this.bounds.width,
      this.bounds.height
    );
    g.globalAlpha = 1;
    */
  }
  setCurrentAnimation() {
    var direction = this.getMovementDirection();
    this.currentAnimation = this.animations[`walk${direction}`];
    if (direction === "Idle") this.currentAnimation = this.animations.Idle;
  }
  getCurrentAnimationFrame() {
    return this.currentAnimation.getCurrentFrame();
  }
}
