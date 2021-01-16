export default class Animation {
  constructor(speed, frames) {
    this.speed = speed;
    console.log(this.speed);
    this.frames = frames;
    this.index = 0;
    this.timer = 0;
  }
  getCurrentFrame() {
    return this.frames[this.index];
  }
  tick(deltaTime, speedMod = 0) {
    var speed = this.speed + speedMod;
    this.timer += deltaTime * 1000;
    if (this.timer >= speed) {
      this.timer -= speed;
      this.index++;
      if (this.index >= this.frames.length) {
        this.index = 0;
      }
    }
  }
}
