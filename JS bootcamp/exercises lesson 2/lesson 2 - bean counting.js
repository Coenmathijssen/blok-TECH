// Function with string as parameter
const countBs = (string) => {
  // Created variable amount with value 0
  let amount = 0
// Loop through every letter in the string
  for (let letter = 0; letter < string.length; letter++) {
    // If the current letter in the loop is a B, add one to amount
    if (string[letter] === 'B') {
      amount++
    }
  }
  // Return the final amount of B's
  return amount
}

// Function which takes a string and a character
const countChar = (string, character) => {
  // Created variable amount with value 0
  let amount = 0
  // Loop through every letter in the string
  for (let letter = 0; letter < string.length; letter++) {
    // If the string contains the character of the parameter, add one to amount
    if (string[letter] === character) {
      amount++
    }
  }
  // Return the final amount of B's
  return amount
}
