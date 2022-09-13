import Board from "./Board.js"
import RobotFactory from "./RobotFactory.js"
import DimensionRequestor from "./DimensionRequester.js"

export default class GameSetup {
  static setup(ioHandler) {
    const dimensions = DimensionRequestor.get(ioHandler)
    return [this.#createBoard(dimensions), this.#createRobot(dimensions)]
  }
  
  static #createBoard(dimensions) {
    return new Board(dimensions)
  }

  static #createRobot(dimensions) {
    const posLimits = {
      x: {
        min: 1,
        max: dimensions.width
      },
      y: {
        min: 1,
        max: dimensions.height
      }
    }

    return RobotFactory.createRobot(posLimits)
  }
}