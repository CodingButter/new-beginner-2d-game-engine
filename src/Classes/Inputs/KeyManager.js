const keys = []
const pressedTriggers = []
const releasedTriggers = []
window.onkeydown = ({ keyCode }) => {
    keys[keyCode] = true
    pressedTriggers.map((trigger) => {
        if (String.fromCharCode(keyCode) === trigger.key) {
            trigger.callback()
        }
        return null
    })
}
window.onkeyup = ({ keyCode }) => {
    keys[keyCode] = false
    releasedTriggers.map((trigger) => {
        if (String.fromCharCode(keyCode) === trigger.key) {
            trigger.callback()
        }
        return null
    })
}

class KeyManager {
    constructor(handler) {
        this.handler = handler
    }
    tick() {
        this.left = keys[37] || keys[65]
        this.up = keys[38] || keys[87]
        this.right = keys[39] || keys[68]
        this.down = keys[40] || keys[83]
        this.shift = keys[16]
    }
    keyPressedTrigger(key, callback) {
        pressedTriggers.push({ key, callback })
    }
    keyReleasedTrigger(key, callback) {
        releasedTriggers.push({ key, callback })
    }
}

export default KeyManager
