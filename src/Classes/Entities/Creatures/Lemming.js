import Creature from "./Creature";
import { Animation, Assets } from "Classes/GFX";
import { toInt, getDistance } from "Classes/Utilities/Math";
import { fpsToMili } from "Classes/Utilities";
export default class Lemming extends Creature {
  constructor(handler, parent, x, y) {
    super(handler, x, y, Creature.DEFAULT_WIDTH, Creature.DEFAULT_HEIGHT);
    this.parent = parent;
    this.bounds.x = this.width / 2.5;
    this.bounds.y = this.height - this.height / 2.5;
    this.bounds.width = this.width / 4;
    this.bounds.height = this.height / 4;
    this.texture = Assets.player;
    this.speed = Creature.DEFAULT_SPEED + 50;
    this.sprint = 0;
    this.speedDecay = 0.95;

    this.trailEasing = 80;
    //Trail Radius how close it follows
    this.trailRadius = 50;
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
    this.xMove *= this.speedDecay;
    this.yMove *= this.speedDecay;
    if (Math.abs(this.xMove) < 0.05) this.xMove = 0;
    if (Math.abs(this.yMove) < 0.05) this.yMove = 0;
    if (
      getDistance(this.x, this.y, this.parent.x, this.parent.y) >
        this.trailRadius ||
      1 === 1
    ) {
      this.xMove +=
        -(this.x - (this.parent.x + this.parent.width / 2)) / this.trailEasing;
      this.yMove +=
        -(this.y - (this.parent.y + this.parent.height / 2)) / this.trailEasing;
    }
  }

  tick(deltaTime) {
    this.setCurrentAnimation();
    this.currentAnimation.tick(deltaTime, -this.getAbsoluteSpeed() / 5);
    this.getInput(deltaTime);
    this.move();
  }
  render(g) {
    /*g.fillStyle = "#000";
    g.fillText(`Movement:${this.xMove},${this.yMove}`, 5, 50);
    g.fillText(`Position:${this.x},${this.y}`, 5, 65);
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
