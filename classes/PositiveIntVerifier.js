export default class PositiveIntVerifier {

  static verify(input) {
    return this.#isPositiveInt(input)
  }

  static #isPositiveInt(input) {
    input = Number(input)
    return Number.isInteger(input) && input > 0
  }
}