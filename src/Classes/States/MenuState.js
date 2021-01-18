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

    render(g) {
        g.font = '40px Roboto'
        g.fillStyle = '#888'
        g.fillText(
            'Click To Start',
            this.handler.getWidth() / 2 - (this.handler.getWidth() - 10) / 2,
            this.handler.getHeight() / 2,
            this.handler.getWidth() - 10
        )
    }
}
