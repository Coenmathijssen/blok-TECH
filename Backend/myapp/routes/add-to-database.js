// This file validates

const express = require('express')
const router = express.Router()

const mongojs = require('mongojs')
const db = mongojs('database', ['users'])

router.post('/users/add', (req, res) => {
  // Error handling with Express validator
  req.checkBody('firstName', 'Please fill in your First Name').notEmpty()
  req.checkBody('lastName', 'Please fill in your Last name is required').notEmpty()
  req.checkBody('email', 'Your Email is required').notEmpty()

  let errors = req.validationErrors()

  if (errors) {
    res.render('index', {
      title: 'Hello world',
      titleSecond: 'This is a second title',
      errors: errors
    })
  } else {
    let newUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email
    }
    // userDatabase.push(newUser)
    db.users.insert(newUser, (err, res) => {
      if (err) {
        console.log(err)
      }
    })
    res.json({ status: 'New user added to database' })
  }
})

module.exports = router
