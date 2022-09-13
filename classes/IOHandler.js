import promptSync from 'prompt-sync'

export default class IOHandler {
  constructor() {
    this.prompt = promptSync()
  }

  static getInput(message) {
    return promptSync()(message).trim()
  }

  static output(message) {
    console.log(message)
  }
}

