// All of the rendering of pages happen here.

// Render the right pages and data per page
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('./user-schema')

const session = require('express-session')

// Rendering homescreen
router.get('/', (req, res) => {
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
})

// Rendering matches screen
router.get('/matches', (req, res) => {
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
})

// Rendering messages screen
router.get('/messages', (req, res) => {
  res.render('messages', {
    title: 'Messages',
    firstLink: 'Alle matches', // Top nav menu item
    secondLink: 'Berichten',
    firstAnchor: '../matches', // Top nav menu anchor links
    secondAnchor: '../messages'
  })
})

// Rendering profile overview screen
router.get('/profile-overview', (req, res) => {
  res.render('profile-overview', {
    title: 'Profile overview',
    firstLink: 'Ik ben', // Top nav menu item
    secondLink: 'Ik ben opzoek naar',
    firstAnchor: '../profile-overview', // Top nav menu anchor links
    secondAnchor: '../profile-overview'
  })
})

// Rendering profile detail screen
router.get('/profile-detail', (req, res) => {
  res.render('profile-detail', {
    title: 'Profile detail',
    firstLink: 'Ik ben', // Top nav menu item
    secondLink: 'Ik ben opzoek naar',
    firstAnchor: '../profile-overview', // Top nav menu anchor links
    secondAnchor: '../profile-overview'
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
      users: docs,
      firstLink: 'Ik ben', // Top nav menu item
      secondLink: 'Ik ben opzoek naar',
      firstAnchor: '../profile-overview', // Top nav menu anchor links
      secondAnchor: '../profile-overview'
    })
  })
})

router.get('/create-account', (req, res) => {
  res.render('create-account', {
    title: 'Login page'
  })
})

router.get('/login', (req, res) => {
  res.render('login', {
    title: 'Login page',
    user: req.session.user,
    User: req.session.User
  })
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

router.get('/user', (req, res) => {
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
})

router.get('/update', (req, res) => {
  res.render('update', {
    userData: req.session.userData
  })
})

router.get('/delete', (req, res) => {
  res.render('delete', {
    userData: req.session.userData
  })
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
