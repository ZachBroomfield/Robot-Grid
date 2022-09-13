import CommandSeperator from "./CommandSeperator.js"
import CommandMatcher from "./CommandMatcher.js"
import ValidCommands from "./ValidCommands.js"
import PositionNormaliser from "./PositionNormaliser.js"
import CommandRunner from "./CommandRunner.js"

export default class GameLoop {
  constructor(ioHandler, messageHandler, board, robot) {
    this.continueLoop = true
    this.ioHandler = ioHandler
    this.messages = messageHandler
    this.board = board
    this.robot = robot
    this.commandRunner = new CommandRunner(this.ioHandler, this.messages, this.board, this.robot)
  }

  startLoop() {
    while(this.continueLoop) {
      this.#loop()
    }
  }

  #loop() {
    let command = false
    let message = this.messages.startTurn()

    while (!command) {
      const input = this.ioHandler.getInput(message)

      let splitInput = CommandSeperator.seperate(input)
      let amount = splitInput[1] ? splitInput[1] : 1
      command = CommandMatcher.match(splitInput[0], ValidCommands.get())

      if (!command) {
        message = this.messages.invalidCommand()
        continue
      }

      this.continueLoop = this.commandRunner.run(command, amount)
      this.#checkCollision()
    }
  }

  #checkCollision() {
    this.robot.setPoint(
      PositionNormaliser.normalise({
        point: this.robot.position,
        dimensions: this.board.dimensions
      })
    )
  }
}