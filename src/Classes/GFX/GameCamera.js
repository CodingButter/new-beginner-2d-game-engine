import { Tile } from 'Classes/Tiles'

export default class GameCamera {
    constructor(handler, xOffset, yOffset) {
        this.handler = handler
        this.xOffset = xOffset
        this.yOffset = yOffset
        this.ease = true
        this.easing = GameCamera.DEFAULT_EASING
        this.zoomEasing = GameCamera.DEFAULT_ZOOM_EASING
        this.zoom = 1
        this.zoomTarget = 1
    }

    /**
     * ease the camera
     * @param {Float} x
     * @param {Float} y
     * @param {DeltaTime} deltaTime
     */

    move(deltaTime, x, y) {
        this.updateZoom(deltaTime)
        if (this.ease) {
            this.xOffset -= (this.xOffset - x) / (this.easing / deltaTime)
            this.yOffset -= (this.yOffset - y) / (this.easing / deltaTime)
            if (Math.abs(this.xOffset - x) < 1) this.xOffset = x
            if (Math.abs(this.yOffset - y) < 1) this.yOffset = y
        } else {
            this.xOffset = x
            this.yOffset = y
        }
        this.checkBlankSpaces()
    }

    updateZoom(deltaTime) {
        this.zoom -= (this.zoom - this.zoomTarget / this.zoomEasing) * deltaTime
    }
    checkBlankSpaces() {
        if (this.xOffset < 0) this.xOffset = 0
        if (this.yOffset < 0) this.yOffset = 0
        if (
            this.xOffset >
            this.handler.getWorld().getWidth() * Tile.TILEWIDTH -
                this.handler.getWidth()
        )
            this.xOffset =
                this.handler.getWorld().getWidth() * Tile.TILEWIDTH -
                this.handler.getWidth()
        if (
            this.yOffset >
            this.handler.getWorld().getHeight() * Tile.TILEHEIGHT -
                this.handler.getHeight()
        )
            this.yOffset =
                this.handler.getWorld().getHeight() * Tile.TILEHEIGHT -
                this.handler.getHeight()
    }

    /**
     * Center the Camera on an Entity
     * @param {Entity} entity
     * @param {DeltaTime} deltaTime
     * @param {Boolean} easing
     */
    centerOnEntity(entity, deltaTime, easing = true) {
        this.move(
            deltaTime,
            entity.x + entity.width / 2 - this.handler.getWidth() / 2,
            entity.y + entity.height / 2 - this.handler.getHeight() / 2,
            easing
        )
    }

    getxOffset() {
        return this.xOffset
    }
    getyOffset() {
        return this.yOffset
    }
    getEasing() {
        return this.ease
    }
    getZoom() {
        return this.zoom
    }

    setZoom(amt) {
        this.zoomTarget = amt
    }
}
GameCamera.DEFAULT_EASING = 0.4
GameCamera.DEFAULT_ZOOM_EASING = 0.4
