import { Display } from 'Classes/Display'
import { Assets, GameCamera } from 'Classes/GFX'
import { State, GameState, MenuState } from 'Classes/States'
import Handler from 'Classes/Handler'
import { KeyManager, MouseManager } from 'Classes/Inputs'
import { Tile } from 'Classes/Tiles'
import Stats from 'Classes/Utilities/Stats'
//Set Private Variables
//Handler
var handler
//Game Info
var parent, width, height, maxWidth, maxHeight, title

//Game loop
var running, lastTime

//Game States
var gameState, menuState

//tick stuff
var ticks, physicsFramesPerSecond

//Render Stuffs
var display, g, gameCamera, stats

//inputs
var mouseManager, keyManager

function setFPS() {
    ticks.splice(10000, ticks.length - 1)
    var totalDeltaTime = 0
    ticks.forEach((tick) => {
        totalDeltaTime += tick
    })
    var averageDeltaTime = totalDeltaTime / ticks.length
    physicsFramesPerSecond = 1000 / (averageDeltaTime * 1000)
}

export default class Game {
    constructor(parentElement, gameTitle, gameWidth, gameHeight) {
        parent = parentElement
        title = gameTitle
        width = gameWidth
        height = gameHeight
        maxWidth = gameWidth
        maxHeight = gameHeight
        running = false
    }

    //Tick Method runs all game update logic
    tick(deltaTime) {
        keyManager.tick()
        mouseManager.tick()
        if (State.getState()) {
            State.getState().tick(deltaTime)
        }
    }

    //After Ticking the Render Method Displays all the updated graphics to the screen
    render(deltaTime) {
        //Clear Screen
        g.clearRect(0, 0, maxWidth, maxHeight)

        //Draw Stuff
        g.fillStyle = '#ccc'
        g.fillRect(0, 0, width, height)
        g.fillStyle = '#000'
        if (State.getState() && Assets.getTotalProgress() === 100) {
            State.getState().render(g)
        }
        stats.render(g)

        /*
    //show fps
    g.font = "30px Roboto";
    g.fillText(`fps:${parseInt(1000 / (1000 * deltaTime))}`, 10, 30);
    */
    }

    init() {
        Assets.init()
        handler = new Handler(this)
        gameCamera = new GameCamera(handler, 0, 0)
        keyManager = new KeyManager(handler)
        mouseManager = new MouseManager(handler)
        stats = new Stats(handler)
        Tile.setTiles()

        ticks = []

        //Initialize States
        menuState = new MenuState(handler)
        gameState = new GameState(handler)
        State.setState(menuState)

        //Initiate Display and getting context
        display = new Display(handler, parent, title, width, height)
        display.updateSize()
        g = display.getContext()

        const self = this
        const loop = (now) => {
            self.render()
            if (running) {
                requestAnimationFrame(loop)
            }
            return null
        }
        requestAnimationFrame(loop)
        const tickLoop = (now) => {
            if (lastTime === undefined) lastTime = now
            var deltaTime = (now - lastTime) / 1000
            lastTime = now
            ticks.push(deltaTime)
            setFPS()
            self.tick(deltaTime)
            setTimeout(tickLoop, 0, Date.now())
        }
        tickLoop(Date.now())
    }

    start() {
        if (running) return
        running = true
        this.init()
    }
    stop() {
        running = false
    }

    //Getters
    getMaxHeight() {
        return maxHeight
    }
    getMaxWidth() {
        return maxWidth
    }
    getWidth() {
        return width
    }
    getHeight() {
        return height
    }
    getState() {
        return State.getState()
    }
    getMenuState() {
        return menuState
    }
    getGameState() {
        return gameState
    }
    setWidth(value) {
        width = value
        display.getCanvas().width = value
    }
    setHeight(value) {
        height = value
        display.getCanvas().height = value
    }
    getKeyManager() {
        return keyManager
    }
    getMouseManager() {
        return mouseManager
    }
    getGameCanvas() {
        return display.getCanvas()
    }
    getGameCamera() {
        return gameCamera
    }
    getStatsVisibility() {
        return stats.getStatsVisibility()
    }
    getPhysicsFramesPerSecond() {
        return physicsFramesPerSecond
    }
}
