/*!
 * create a random number between two numbers <https://github.com/Coenmathijssen/NPM-boilerplate>
 *
 * Copyright (c) 2018-2019, Coen Mathijssen.
 * Licensed under the MIT License.
 */

const converter = require('convert-string-to-number')

const randomNumber = (firstNumber, secondNumber) => {
  return Math.floor(Math.random() * secondNumber) + firstNumber
}

module.exports = randomNumber
