// This file validates

const express = require('express')
const router = express.Router()

const mongojs = require('mongojs')
const db = mongojs('database', ['users'])
const ObjectId = mongojs.ObjectId

// Adding a new user to the database with error handling
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

// Setting up a default user template
function User (firstName, lastName, email) {
  this.firstName = firstName
  this.lastName = lastName
  this.email = email
}

// let user1 = new User('Flip', 'omg dit werkt', 'test.test@gmail.com')

// db.users.save(user1, (err, savedUser) => {
//   console.log('we doen iets')
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('user saved to database!')
//   }
// })

// db.users.find(user1, (err, savedUser) => {
//   console.log('we doen iets')
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(`User found! ` + user1)
//   }
// })

router.delete('/users/delete/:id', function (req, res) {
  db.users.remove({ _id: ObjectId(req.params.id) }, function (err, result) {
    if (err) {
      console.log(err)
    }
    res.redirect('/')
  })
})

module.exports = router
