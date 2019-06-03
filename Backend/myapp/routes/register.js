const express = require('express')
const router = express.Router()
const argon2 = require('argon2')
const User = require('./user-schema')

// register new user
router.post('/register', (req, res) => {
  const newuser = new User()
  newuser.firstName = req.body.firstName
  newuser.lastName = req.body.lastName
  newuser.email = req.body.email
  newuser.password = await argon2.hash(req.body.password)
  newuser.disability = req.body.disability
  newuser.gender = req.body.tab
  newuser.address = req.body.address
  newuser.hobbies = req.body.hobbies
  newuser.about = req.body.about

  newuser.save((err, savedUser) => {
    if (err) {
      console.log(err)
      return res.status(500).send
    } else {
      res.redirect('/profile-overview')
      return res.status(200).send
    }
  })
})

module.exports = {
  router: router,
  email: emailRegister
}
