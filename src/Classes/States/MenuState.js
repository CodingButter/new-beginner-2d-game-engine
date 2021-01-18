import State from './State'
export default class MenuState extends State {
    constructor(handler) {
        super(handler)
        this.init()
    }
    init() {
        var self = this
        var mouseManager = this.handler.getMouseManager()
        mouseManager.addMousePressedTrigger(mouseManager.left, () => {
            State.setState(self.handler.getGameState())
        })
    }
    tick(deltaTime) {}

    render(g) {}
}
