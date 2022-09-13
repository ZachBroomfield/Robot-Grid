export default class PositionNormaliser {
  static normalise({point, dimensions}) {
    return {
      x: this.#normaliseAxis(point.x, dimensions.width),
      y: this.#normaliseAxis(point.y, dimensions.height)
    }
  }

  static #normaliseAxis(axis, limit) {
    if (axis < 1) {
      return 1
    } else if (axis > limit) {
      return limit
    }
    return axis
  }
}