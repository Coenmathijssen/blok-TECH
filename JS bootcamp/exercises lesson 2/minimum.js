// Function that takes two arguments
let min = (a, b) => {
  // If number a is smaller than b, return a
  if (a < b) {
    return a
  } else if (b < a) {
    // If number b is smaller than a, return b
    return b
  } else {
    // Else, return the numbers are equal
    console.log('Both numbers are equal')
  }
}

console.log(min(0, 10))
