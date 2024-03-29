///// PROGRESSIVE DISCLOSURE /////
const extrovertAppear = document.getElementsByClassName('container')[0]
extrovertAppear.className += ' appear'

const fireAppear = () => {
  extrovertAppear.className += ' checked'
}

const appear = document.getElementsByClassName('fireAppear')

Array.prototype.forEach.call(appear, (item) => {
  item.addEventListener('click', fireAppear)
})

///// THE FORM IN MULTIPLE STEPS /////
// Selecting every fieldset available
const formPart = document.getElementsByTagName('fieldset')

// Selecting every button available
const buttons = document.getElementsByTagName('a')

// Checking the active fieldset with formNumber
let formNumber = 0
let formPartActive = formPart[formNumber]
formPartActive.className = 'show'

// Checks the amount of fieldsets and duplicates the HTML string for the bullet as many times  as there are fieldsets
let bulletNumber = "<div class='bullet'></div>"
const formLength = formPart.length
for (let i = 1; i < formLength; i++) {
  bulletNumber += "<div class='bullet'></div>"

  // Hide the fieldsets (formParts) if the Javascript is running
  formPart[i].className = 'hide'

  // Changes the hide class to show to display the buttons if the Javascript is running
  for (let x = 0; x < buttons.length; x++) {
    buttons[x].className = 'show'
  }
}

// Checks the amount of bulletContainers and injects the bullets necessery (see the loop above) into each one
const bulletContainer = document.getElementsByClassName('bullet-container')
for (let i = 0; i < bulletContainer.length; i++) {
  bulletContainer[i].innerHTML = bulletNumber
}

// Removes the previous button on first fieldset and removes the next buton on the last fieldset
document.getElementsByName('back')[0].className = 'hide'
document.getElementsByName('next')[bulletContainer.length - 1].className = 'hide'

// Makes the first dot active
const bullets = document.getElementsByClassName('bullet')
bullets[formNumber].className += ' bullet-active'

// Function to go to the next fieldset (formPart) and change the bullet active to the next one
const nextStep = () => {
  // Hides the current fieldset and reveales the NEXT one with the class show
  formPart[formNumber].className = 'hide'
  formNumber = formNumber + 1
  formPart[formNumber].className = 'show'

  // Makes the next bullet active
  const bulletAdd = formNumber * formLength + formNumber // Multiplies the number with the formLength to start counting on the right fieldset
  bullets[bulletAdd].className += ' bullet-active'
}

// Hides the current fieldset and reveales the PREVIOUS one with the class show
const previousStep = () => {
  console.log('running')
  const bulletDelete = formNumber * formLength + formNumber // Multiplies the number with the formLength to start counting on the right fieldset
  bullets[bulletDelete].classList.remove('bullet-active')

  formPart[formNumber].className = 'hide'
  formNumber = formNumber - 1
  formPart[formNumber].className = 'show'
}

// Get the back and previous buttons and run corresponding functions when clicked
const previousButton = document.getElementsByName('back')
const nextButton = document.getElementsByName('next')

Array.prototype.forEach.call(previousButton, (item) => {
  item.addEventListener('click', previousStep)
})

Array.prototype.forEach.call(nextButton, (item) => {
  item.addEventListener('click', nextStep)
})
