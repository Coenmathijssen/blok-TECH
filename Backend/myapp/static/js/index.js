// Selecting every fieldset available
const formPart = document.getElementsByTagName('fieldset')

// Selecting every button available
const buttons = document.getElementsByTagName('button')

// Checking the active fieldset with formNumber
let formNumber = 0
let fieldset = formPart[formNumber]
fieldset.className = 'show'

// Checks the amount of fieldsets and duplicates the HTML string for the bullet as many times  as there are fieldsets
let bulletNumber = "<div class='bullet'></div>"
const formLength = formPart.length
for (let i = 1; i < formLength; ++i) {
  bulletNumber += "<div class='bullet'></div>"

  // Hide the fieldsets (formParts) if the Javascript is running
  formPart[i].className = 'hide'

  // Changes the hide class for show to display the buttons if the Javascript is running
  for (let x = 0; x < buttons.length; x++) {
    buttons[x].className = 'show'
  }
}

// Checks the amount of bulletContainers and injects the bullets necessery (see the loop above) into each one
const bulletContainer = document.getElementsByClassName('bullet-container')
for (let i = 0; i < bulletContainer.length; ++i) {
  const bulletContainerCount = bulletContainer[i]
  bulletContainerCount.innerHTML = bulletNumber
}

// Removes the previous button on first fieldset and removes the next buton on the last fieldset
document.getElementsByName('back')[0].className = 'hide'
document.getElementsByName('next')[bulletContainer.length - 1].className = 'hide'

// Makes the first dot active
const bullet = document.getElementsByClassName('bullet')
bullet[formNumber].className += ' bullet-active'

// Function to go to the next fieldset (formPart) and change the bullet active to the next one
function nextStep () {
  fieldset = document.querySelectorAll('fieldset')[formNumber]

  // Hides the current fieldset and reveales the next one with the class show
  fieldset.className = 'hide'
  formNumber = formNumber + 1
  fieldset = formPart[formNumber]
  fieldset.className = 'show'

  // Makes the next bullet active
  var bulletRefresh = formNumber * formLength + formNumber
  bullet[bulletRefresh].className += ' bullet-active'
}

// Hides the current fieldset and reveales the previous one with the class show
function previousStep () {
  formPart[formNumber].className = 'hide'
  formNumber = formNumber - 1
  formPart[formNumber].className = 'show'
};
