const buttons = []
const pressedTriggers = []
const releasedTriggers = []
var mousePosition = { x: 0, y: 0 }

export default class MouseManager {
    constructor(handler) {
        this.handler = handler
        this.init()
    }
    init() {
        var self = this

        this.left = 0
        this.middle = 1
        this.right = 2
        window.onmousedown = ({ button }) => {
            buttons[button] = true
            pressedTriggers.map((trigger) => {
                if (button === trigger.button) {
                    trigger.callback()
                }
                return null
            })
        }
        window.onmouseup = ({ button }) => {
            buttons[button] = false
            releasedTriggers.map((trigger) => {
                if (button === trigger.button) {
                    trigger.callback()
                }
                return null
            })
        }
        window.onmousemove = ({ clientX, clientY }) => {
            var rect = self.handler.getGameCanvas().getBoundingClientRect()
            mousePosition = {
                x: clientX - rect.left,
                y: clientY - rect.top
            }
        }
        window.oncontextmenu = () => {
            return false
        }
    }
    tick() {
        this.leftPressed = buttons[0]
        this.middlePressed = buttons[1]
        this.rightPressed = buttons[2]
    }
    addMousePressedTrigger(button, callback) {
        pressedTriggers.push({ button, callback })
    }
    addMouseReleasedTrigger(button, callback) {
        releasedTriggers.push({ button, callback })
    }
    getMousePosition() {
        return mousePosition
    }
    getMouseX() {
        return mousePosition.x
    }
    getMouseY() {
        return mousePosition.y
    }
}
