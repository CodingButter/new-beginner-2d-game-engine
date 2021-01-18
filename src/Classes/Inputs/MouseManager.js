const buttons = []
const pressedTriggers = []
const releasedTriggers = []
const mousePosition = { x: 0, y: 0 }

export default class MouseManager {
    constructor(handler) {
        this.handler = handler
    }
    tick() {
        MouseManager.leftPressed = buttons[0]
        MouseManager.middlePressed = buttons[1]
        MouseManager.rightPressed = buttons[2]
    }
    mousePressedTrigger(button, callback) {
        pressedTriggers.push({ button, callback })
    }
    mosueReleasedTrigger(button, callback) {
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
MouseManager.left = 0
MouseManager.middle = 1
MouseManager.right = 2

window.onmouseup = ({ button }) => {
    buttons[button] = true
    pressedTriggers.map((trigger) => {
        if (button === trigger.key) {
            trigger.callback()
        }
        return null
    })
}
window.onmouseup = ({ button }) => {
    buttons[button] = false
    releasedTriggers.map((trigger) => {
        if (button === trigger.key) {
            trigger.callback()
        }
        return null
    })
}
window.onmousemove = ({ clientX, clientY }) => {
    var rect = this.handler.getGameCanvas().getBoundingClientRect()
    mousePosition.x = clientX - rect.left
    mousePosition.y = clientY - rect.top
}
