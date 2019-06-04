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
          req.flash('failedLogin', 'Gebruikersnaam en/of wachtwoord is incorrect.')
          res.redirect('/login')
          res.status(404).send()
        } else {
          console.log('Logged in!')
          req.flash('succesLogin', 'Succesfully logged in!')
          res.redirect('/profile-overview')
        }
        req.session.userData = User
        req.session.save(User => {
          // session saved
        })
      }).catch(err => console.log(err))
  })
})

module.exports = router
