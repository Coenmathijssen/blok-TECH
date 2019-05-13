// Create function containing two parameters
const range = (start, end) => {
  // Create an empty array
  let arrayFill = []
  // Loop through the whole array
  for (let i = start; i <= end; i++) {
    // Push every number in the empty array
    arrayFill.push(i)
  }
  // Return the filled array
  return arrayFill
}
// Create function containing two parameters
const sum = (total, arrayNumber) => {
  // Loop over every array with reduce and add every number in array to total. Finally return the sum of all numbers
  return total + arrayNumber
}

range(1, 10).reduce(sum)
