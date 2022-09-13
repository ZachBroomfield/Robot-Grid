export default class MessageHandler {
  
  static startGame() {
    return "Welcome! Please enter a width and height for the board [w h]: "
  }

  static startGameError() {
    return "Incorrect input. Please enter two positive integers in the form 'width height':"
  }

  static startTurn() {
    return "Please enter command for robot (or 'help'): "
  }

  static help() {
    return "Possible commands / shorthand:\n\
    move forward / mf\n\
    move backward / mb\n\
    rotate right / rr\n\
    rotate left / rl\n\
    report\n\
    exit\nOptionally, give a positive integer after a move\n\
    command to specify a value (otherwise default 1)"
  }

  static invalidCommand() {
    return "Invalid command. Type 'help' to see valid commands: "
  }
}