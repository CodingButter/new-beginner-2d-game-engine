import Element from 'Classes/UI/Element'

export default class Button extends Element {
    constructor(handler, label) {
        super(handler, 'button')
        this.label = label
        this.element.innerText = label
    }
}
