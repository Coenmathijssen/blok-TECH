// Create variables black, white, chessboard and spaces (8 per line)
let white
let black
const spaces = 8
let chessboard = ''

// Loop through every row
for (let row = 0; row < spaces; row++) {
  // Loop through every space in the row
  for (let space = 0; space < spaces; space++) {
    // On every even number, give the white the hashtag value and black an empty space value
    if (space % 2 === 0) {
      white = '#'
      black = ' '
      // Reverse this on every uneven space
    } else {
      white = ' '
      black = '#'
    }
    // On the even rows, add the values from the white spaces (to get the chess pattern)
    if (row % 2 === 0) {
      chessboard += white
    // On the uneven rows, add the values from the black spaces (to get the chess pattern)
    } else {
      chessboard += black
    }
  }
  // Add a new line after every finished row loop
  chessboard += '\n'
}
// Print the chessboard in the console
console.log(chessboard)
