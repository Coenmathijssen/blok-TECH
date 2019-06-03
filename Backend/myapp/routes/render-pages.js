// All of the rendering of pages happen here.

// Render the right pages and data per page
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('./user-schema')

const session = require('express-session')

// Rendering homescreen
router.get('/', (req, res) => {
  if (!req.session.userData) {
    console.log(`You're not logged in. Please login first.`)
    res.status(401).send()
    res.redirect('/login')
  } else {
    res.render('index', {
      title: 'Homescreen',
      firstLink: 'Ontdek', // Top nav menu item
      secondLink: 'In de buurt',
      firstAnchor: '../', // Top nav menu anchor links
      secondAnchor: '../',
      name: 'Nena de Vries', // Profile card info
      disability: 'Syndroom van down',
      age: '22 jr.',
      distance: '9km'
    })
  }
})

// Rendering matches screen
router.get('/matches', (req, res) => {
  if (!req.session.userData) {
    console.log(`You're not logged in. Please login first.`)
    res.status(401).send()
    res.redirect('/login')
  } else {
    res.render('matches', {
      title: 'Matches',
      firstLink: 'Alle matches', // Top nav menu item
      secondLink: 'Berichten',
      firstAnchor: '../matches', // Top nav menu anchor links
      secondAnchor: '../messages',
      name1: 'Nena de Vries', // The names of all the overview cards in matches,
      name2: 'Nora Goedhoudt',
      name3: 'Frederique Veenstra',
      name4: 'Roana Neijsen',
      name5: 'Eva Rosheuvel',
      name6: 'Sanne Reij'
    })
  }
})

// Rendering messages screen
router.get('/messages', (req, res) => {
  if (!req.session.userData) {
    console.log(`You're not logged in. Please login first.`)
    res.status(401).send()
    res.redirect('/login')
  } else {
    res.render('messages', {
      title: 'Messages',
      firstLink: 'Alle matches', // Top nav menu item
      secondLink: 'Berichten',
      firstAnchor: '../matches', // Top nav menu anchor links
      secondAnchor: '../messages'
    })
  }
})

// Rendering profile overview screen
router.get('/profile-overview', (req, res) => {
  if (!req.session.userData) {
    console.log(`You're not logged in. Please login first.`)
    res.status(401).send()
    res.redirect('/login')
  } else {
    res.render('profile-overview', {
      title: 'Profile overview',
      firstLink: 'Ik ben', // Top nav menu item
      secondLink: 'Ik ben opzoek naar',
      firstAnchor: '../profile-overview', // Top nav menu anchor links
      secondAnchor: '../profile-overview'
    })
  }
})

// Rendering profile detail screen
router.get('/profile-detail', (req, res) => {
  if (!req.session.userData) {
    console.log(`You're not logged in. Please login first.`)
    res.status(401).send()
    res.redirect('/login')
  } else {
    res.render('profile-detail', {
      title: 'Profile detail',
      firstLink: 'Ik ben', // Top nav menu item
      secondLink: 'Ik ben opzoek naar',
      firstAnchor: '../profile-overview', // Top nav menu anchor links
      secondAnchor: '../profile-overview'
    })
  }
})

// Rendering the create account screen
router.get('/create-account', (req, res) => {
  res.render('create-account', {
    title: 'Login page'
  })
})

// Rendering the login screen
router.get('/login', (req, res) => {
  if (!req.session.userData) {
    res.render('login', {
      title: 'Login page',
      userData: req.session.userData
    })
  } else {
    res.redirect('/user')
  }
})

// Verifying if the user has a session and redirecting to the homepage
router.get('/dashboard', (req, res) => {
  if (!req.session.userData) {
    console.log(`You're not allowed to log in`)
    res.status(401).send()
    res.redirect('/login')
  } else {
    console.log(`You're succesfully logged in!`)
    res.status(200).send()
    res.redirect('/user')
  }
})

// Rendering the account screen with the user data
router.get('/user', (req, res) => {
  if (!req.session.userData) {
    console.log(`You're not logged in. Please login first.`)
    res.status(401).send()
    res.redirect('/login')
  } else {
    User.find({}, (err, docs) => {
      res.render('user', {
        users: docs,
        userData: req.session.userData,
        title: 'Messages',
        firstLink: 'Alle matches', // Top nav menu item
        secondLink: 'Berichten',
        firstAnchor: '../matches', // Top nav menu anchor links
        secondAnchor: '../messages'
      })
    })
  }
})

// Rendering the profile page, but editable
router.get('/update', (req, res) => {
  if (!req.session.userData) {
    console.log(`You're not logged in. Please login first.`)
    res.status(401).send()
    res.redirect('/login')
  } else {
    res.render('update', {
      userData: req.session.userData
    })
  }
})

// Handling the 404 error page
router.get('*', function (req, res) {
  res.status(404).send('<h1>I`m sorry, the page you were looking for is not here <br> 404</h1>')
})

router.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'xxxx',
  port: 3000,
  secure: false
}))

module.exports = router
