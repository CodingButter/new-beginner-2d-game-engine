import { State } from 'Classes/States'
import Button from './Button'

export default class StartButton extends Button {
    constructor(handler, label) {
        super(handler, label)
        this.init()
    }
    init() {
        this.class = 'bigButton'

        this.style = {
            top: this.handler.getHeight() / 2 - 25,
            left: this.handler.getWidth() / 2 - 100
        }
        this.handler.getParentElement().appendChild(this.getDomElement())
        this.click((e) => {
            this.remove()
            State.getState().playGame()
        })
    }
}
