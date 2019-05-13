// Create the array in the exercise
let arrays = [[1, 2, 3], [4, 5], [6]]

// Use reduce to concatinate the multiple arrays into one
arrays = arrays.reduce((a, b) => a.concat(b), [])
