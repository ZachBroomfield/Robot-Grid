import PositiveIntVerifier from "./PositiveIntVerifier.js"

export default class CommandSeperator {

  static seperate(input) {
    return this.#seperateCommandAndAmount(input)
  }

  static #seperateCommandAndAmount(input) {
    const lastSpace = input.lastIndexOf(' ')

    let commandInput, amount

    amount = input.slice(lastSpace + 1)

    if (PositiveIntVerifier.verify(amount)) {
      amount = Number(amount)
      commandInput = input.slice(0, lastSpace)
    } else {
      amount = false
      commandInput = input
    }
    

    return [commandInput, amount]
  }

  // static #includesValidAmount(input) {
  //   const lastSpace = input.lastIndexOf(' ')
    
  //   if (lastSpace === -1) {
  //     return false
  //   }

  //   const lastValue = Number(input.slice(lastSpace + 1))
  //   return PositiveIntVerifier.verify(lastValue)

  // }
}