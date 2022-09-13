import PositiveIntVerifier from "./PositiveIntVerifier.js"

export default class DimensionsParser {

  static parseForTwoInts(input) {
    if (!input.includes(' ')) return false

    const [first, second] = input.split(' ')

    if (!this.#isValid(first, second)) return false 

    return [Number(first), Number(second)]
  }

  static #isValid(first, second) {
    return PositiveIntVerifier.verify(first) && PositiveIntVerifier.verify(second)
  }
}