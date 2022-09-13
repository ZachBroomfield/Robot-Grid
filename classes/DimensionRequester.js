import DimensionsParser from "./DimensionsParser.js"
import MessageHandler from "./MessageHandler.js"

export default class DimensionRequestor {
  static get(ioHandler) {
    return this.#requestUntilValidInput(ioHandler)
  }

  static #requestUntilValidInput(ioHandler) {
    let input = false
    let message = MessageHandler.startGame()
    const dimensions = {}

    // prompt for width and height until valid input entered
    while (input === false) {
      input = ioHandler.getInput(message)
      input = DimensionsParser.parseForTwoInts(input)

      dimensions.width = input[0],
      dimensions.height = input[1]

      message = MessageHandler.startGameError()
    }
    return dimensions
  }
}