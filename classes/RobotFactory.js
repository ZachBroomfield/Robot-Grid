import Robot from "./Robot.js"
import Angle from './util/Angle.js'

export default class RobotFactory {

  static createRobot(posLimits) {
    const position = this.#randomPosition(posLimits)
    const angle = Angle.randomCardinalDirection()

    return new Robot(position, angle)
  }

  static #randomPosition(posLimits) {
    return {
      x: this.#randomIntBetweenLimits(posLimits.x),
      y: this.#randomIntBetweenLimits(posLimits.y)
    }
  }

  static #randomIntBetweenLimits(input) {
    return Math.round((Math.random() * (input.max - input.min)) + input.min)
  }
}