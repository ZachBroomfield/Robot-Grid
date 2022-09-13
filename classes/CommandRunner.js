import BoardPrinter from "./BoardPrinter.js"

export default class CommandRunner {
  constructor(ioHandler, messageHandler, board, robot) {
    this.ioHandler = ioHandler
    this.messages = messageHandler
    this.board = board
    this.robot = robot
  }

  run(command, amount) {
    return this.#runCommand(command, amount)
  }

  #runCommand(command, amount) {
    let continueLoop = true
    switch (command) {
      case 'forward':
        this.robot.moveForward(amount)
        break
    
      case 'backward':
        this.robot.moveBackward(amount)
        break
      
      case 'right':
        this.robot.rotateRight(amount)
        break

      case 'left':
        this.robot.rotateLeft(amount)
        break
      
      case 'report':
        this.#printReport()
        break

      case 'print':
        this.#printBoard()
        break
      
      case 'help':
        this.#printHelp()
        break
      
      case 'exit':
        continueLoop = false
        break
    }

    return continueLoop
  }

  #printReport() {
    this.ioHandler.output(
      this.board.generateReport() +
      this.robot.generateReport()
    )
  }

  #printBoard() {
    BoardPrinter.print(this.board, this.robot, this.ioHandler)
  }

  #printHelp() {
    this.ioHandler.output(this.messages.help())
  }
}