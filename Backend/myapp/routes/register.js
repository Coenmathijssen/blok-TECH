const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const User = require('./user-schema')

let emailRegister = null

// register new user
router.post('/register', (req, res) => {
  const newuser = new User()
  newuser.firstName = req.body.firstName
  newuser.lastName = req.body.lastName
  newuser.email = req.body.email
  newuser.password = req.body.password

  newuser.save((err, savedUser) => {
    if (err) {
      console.log(err)
      return res.status(500).send
    } else {
      res.redirect('/user')
      return res.status(200).send
    }
  })
})

module.exports = {
  router: router,
  email: emailRegister
}
