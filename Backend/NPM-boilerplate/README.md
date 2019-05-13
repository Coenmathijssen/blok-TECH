# Random Number for CMD-BE
This package returns a random number between two given numbers

## Installation
`$ npm install random-number-CMD-BE`

## Dependencies
* [Convert string to number - ^1.0.3](https://www.npmjs.com/package/convert-string-to-number)

## Usage
#### Without the use of convert-string-to-number
`const randomNumber = require('random-number-CMD-BE')
randomNumber(10, 15)
// => Will give a random number between 10 and 15 (including both numbers)`

#### With the use of convert-string-to-number
`const randomNumber = require('random-number-CMD-BE')
const converter = require('convert-string-to-number')
randomNumber(converter('10'), converter('15'))
// => Will give a random number between 10 and 15 (including both numbers), and will also rewrite strings to numbers`

## Methods
`const randomNumber = require('random-number-CMD-BE')`

## License
This package is licensed under the [MIT license](https://github.com/Coenmathijssen/NPM-boilerplate/blob/master/LICENSE) © [Coen Mathijssen](https://www.coenmathijssen.nl/)
