export default class Element {
    constructor(handler, tagName) {
        this.handler = handler
        this.tagName = tagName
        this.element = document.createElement(this.tagName)
    }

    set style(style) {
        style.top = this.handler.getY() + style.top
        style.left = this.handler.getX() + style.left
        this._style = { ...style, ...this._style }
        for (const property in style) {
            this.element.style[property] = style[property]
        }
    }
    set id(id) {
        this._id = id
        this.element.setAttribute('id', id)
    }
    set class(className) {
        this._class = className
        this.element.setAttribute('class', className)
    }
    mouseEnter(callback) {
        this.element.onmouseenter = callback
    }
    mouseLeave(callback) {
        this.element.onmouseout = callback
    }
    click(callback) {
        this.element.onclick = callback
    }
    get style() {
        return this._style
    }
    get id() {
        return this._id
    }

    get class() {
        return this._class
    }
    addChild(element) {
        this.element.appendChild(element)
    }
    appendTo(element) {
        element.element.appendChild(this.element)
    }

    getDomElement() {
        return this.element
    }
    remove() {
        this.element.remove()
    }
}
