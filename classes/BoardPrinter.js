export default class BoardPrinter {
  static print(board, robot, ioHandler) {
    ioHandler.output('test')
    this.#print(board, robot, ioHandler)
  }

  static #print(board, robot, ioHandler) {
    for (let i = board.dimensions.height + 1; i > 0; i--) {
      let topLine, midLine
      for (let j = 0; j < board.dimensions.width; j++) {
        topLine = topLine ? topLine + '─ ' : ' ─ '
        midLine = midLine ? midLine + ' |' : '|'
      }
      midLine += ' |'

      ioHandler.output(topLine)
      ioHandler.output(midLine)
    }
  }
}

/*

┳
┻ ╋
┫
 ━
┏ ━ ┓
┃ R ┃
┗ ━ ┛ 


https://www.fileformat.info/info/unicode/category/So/list.htm
*/