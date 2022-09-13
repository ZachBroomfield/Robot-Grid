export default class CommandMatcher {

  static match(input, commands) {
    return this.#matchCommand(input, commands)
  }

  static #matchCommand(input, commands) {
    let command = false

    Object.entries(commands).forEach(([key, values]) => {
      values.forEach((value) => {
        if (value === input) {
          command = key
        }
      })
    })

    return command
  }
}