import State from './State'
import { StartButton } from 'Classes/UI/Buttons'
export default class MenuState extends State {
    constructor(handler) {
        super(handler)
        this.init()
    }
    init() {
        var startButton = new StartButton(this.handler, 'Play Game')
    }
    tick(deltaTime) {}

    render(g) {}
    playGame() {
        State.setState(this.handler.getGameState())
    }
}
