// All of the rendering of pages happen here.

// Render the right pages and data per page
const express = require('express')
const router = express.Router()

const mongojs = require('mongojs')
const db = mongojs('database', ['users'])

// `Creating an empty array to be filled with data received from the contact form`
const userDatabase = []

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Hello world',
    titleSecond: 'This is a second title',
    test: 'test'
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
