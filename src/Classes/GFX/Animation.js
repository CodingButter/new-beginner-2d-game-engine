export default class Animation {
    /**
     *
     * @param {Float} speed
     * @param {Array} frames
     */
    constructor(speed, frames, callback) {
        this.callback = callback
        this.speed = speed
        this.frames = frames
        this.index = 0
        this.timer = 0
    }

    /**
     * Returns the current frame of the animation
     */
    getCurrentFrame() {
        return this.frames[this.index]
    }

    /**
     * Animation logic
     * @param {DeltaTime} deltaTime
     * @param {Float} speedMod
     */
    tick(deltaTime, speedMod = 0) {
        var speed = this.speed + speedMod
        this.timer += deltaTime * 1000
        if (this.timer >= speed) {
            this.timer -= speed
            this.index++
            if (this.index >= this.frames.length) {
                if (this.callback) this.callback()
                this.index = 0
            }
        }
    }
}
