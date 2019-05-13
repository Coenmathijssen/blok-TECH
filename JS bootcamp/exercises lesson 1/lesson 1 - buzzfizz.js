// Loop through the number 1 to 100
for (let i = 0; i < 100; i++) {
  // If the number is three, console.log 'Fizz'
  if (i % 3 === 0) {
    console.log('Fizz')
  // If the number is five, console.log 'Buzz'
  } else if (i % 5 === 0) {
    console.log('Buzz')
  // If the numbers are divisible by 3 and 5, console.log 'BuzzFizz'
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log('BuzzFizz')
  } else {
    console.log(i)
  }
}
