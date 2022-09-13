import GameSetup from "./GameSetup.js"
import MessageHandler from "./MessageHandler.js"
import GameLoop from "./GameLoop.js"

export default class  GameController {
  constructor(ioHandler) {
    this.ioHandler = ioHandler
    this.gameSetup = GameSetup
    this.messages = MessageHandler

    // get board size and create board
    const setup = this.gameSetup.setup(this.ioHandler)
    this.board = setup[0]
    this.robot = setup[1]
    
    this.gameLoop = new GameLoop(this.ioHandler, this.messages, this.board, this.robot)

    this.gameLoop.startLoop()
  }
}