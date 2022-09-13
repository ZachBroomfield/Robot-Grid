export default class Board {
  constructor(dimensions) {
    this.dimensions = dimensions
  }

  generateReport() {
    return `Board size:\n\
      Width - ${this.dimensions.width}, Height - ${this.dimensions.height}\n`
  }
}