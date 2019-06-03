const express = require('express')
const router = express.Router()
const User = require('./user-schema')

router.post('/login', (req, res) => {
  User.findOne({ email: req.body.email, password: req.body.password }, (err, User) => {
    Promise.resolve()
      .then(() => {
        if (err) {
          console.log(err)
          res.status(500).send()
        }
      }).then(() => {
        if (!User) {
          console.log('Failed to log in')
          res.status(404).send()
        } else {
          console.log('Logged in!')
          res.redirect('/dashboard')
          res.status(200).send()
        }
        req.session.userData = User
        req.session.save(User => {
          // session saved
        })
      })
  })
})

module.exports = router
