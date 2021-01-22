export default class {
    constructor(game, world) {
        this.game = game
        this.world = world
    }

    //Getters and Setters
    getGame() {
        return this.game
    }
    getWorld() {
        return this.world
    }
    getState() {
        return this.game.getState()
    }
    getMaxGameWidth() {
        return this.game.getMaxWidth()
    }
    getMaxGameHeight() {
        return this.game.getMaxHeight()
    }
    getWidth() {
        return this.game.getWidth()
    }

    getHeight() {
        return this.game.getHeight()
    }
    getX() {
        return this.game.getX()
    }
    getY() {
        return this.game.getY()
    }
    getGameCamera() {
        return this.game.getGameCamera()
    }
    getKeyManager() {
        return this.game.getKeyManager()
    }
    getGameCanvas() {
        return this.game.getGameCanvas()
    }
    getParentElement() {
        return this.game.getParentElement()
    }
    getGameState() {
        return this.game.getGameState()
    }
    getMenuState() {
        return this.game.getMenuState()
    }
    getMouseManager() {
        return this.game.getMouseManager()
    }
    getPhysicsFramesPerSecond() {
        return this.game.getPhysicsFramesPerSecond()
    }
    getStatsVisibility() {
        return this.game.getStatsVisibility()
    }
    setGame(game) {
        this.game = game
    }
    setWorld(world) {
        this.world = world
    }
    getPlayer() {
        this.world.getPlayer()
    }
}
