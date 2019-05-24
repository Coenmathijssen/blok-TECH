// All of the rendering of pages happen here.

// Render the right pages and data per page
const express = require('express')
const router = express.Router()

const mongojs = require('mongojs')
const db = mongojs('database', ['users'])

// `Creating an empty array to be filled with data received from the contact form`
const userDatabase = []

// Rendering homescreen
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Homescreen',
    firstLink: 'Ontdek', // Top nav menu item
    secondLink: 'In de buurt',
    name: 'Nena de Vries', // Profile card info
    disability: 'Syndroom van down',
    age: '22 jr.',
    distance: '9km'
  })
})

// Rendering matches screen
router.get('/matches', (req, res) => {
  res.render('matches', {
    title: 'Matches',
    firstLink: 'Alle matches', // Top nav menu item
    secondLink: 'Berichten',
    name1: 'Nena de Vries', // The names of all the overview cards in matches,
    name2: 'Nora Goedhoudt',
    name3: 'Frederique Veenstra',
    name4: 'Roana Neijsen',
    name5: 'Eva Rosheuvel',
    name6: 'Sanne Reij'
  })
})

// Rendering messages screen
router.get('/messages', (req, res) => {
  res.render('messages', {
    title: 'Messages',
    firstLink: 'Alle matches', // Top nav menu item
    secondLink: 'Berichten'
  })
})

// Rendering profile overview screen
router.get('/profile-overview', (req, res) => {
  res.render('profile-overview', {
    title: 'Profile overview',
    firstLink: 'Ik ben', // Top nav menu item
    secondLink: 'Ik ben opzoek naar'
  })
})

// Rendering profile detail screen
router.get('/profile-detail', (req, res) => {
  res.render('profile-detail', {
    title: 'Profile detail',
    firstLink: 'Ik ben', // Top nav menu item
    secondLink: 'Ik ben opzoek naar'
  })
})

router.get('/about', (req, res) => {
  res.render('about', {
    title: 'This is the about page'
  })

  res.render('partials/header', {
    test: 'halloo'
  })
})

router.get('/users', (req, res) => {
  db.users.find((err, docs) => {
    res.render('users', {
      title: 'A list of users',
      userDatabase: userDatabase,
      users: docs
    })
  })
})

// Handling the 404 error page
router.get('*', function (req, res) {
  res.status(404).send('<h1>I`m sorry, the page you were looking for is not here <br> 404</h1>')
})

module.exports = router
