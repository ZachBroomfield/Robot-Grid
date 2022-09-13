export default class Angle {
  static randomCardinalDirection() {
    return Math.round((Math.random() * 3)) * 90
  }
}