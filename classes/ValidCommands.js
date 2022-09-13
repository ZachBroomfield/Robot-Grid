export default class ValidCommands {
  
  static get() {
    return {
      forward: ["move forward", "mf"],
      backward: ["move backward", "mb"],
      right: ["rotate right", "rr"],
      left: ["rotate left", "rl"],
      report: ["report"],
      print: ['print'],
      help: ["help"],
      exit: ["exit"]
    }
  }
}