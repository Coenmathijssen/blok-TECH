const express = require('express')
const router = express.Router()
const User = require('./user-schema')

router.get('/delete', (req, res) => {
  const id = req.session.userData._id
  User.findOneAndRemove({ _id: id }, (err) => {
    if (err) {
      req.flash('failedDelete', 'Er is iets mis gegaan. Probeer het opnieuw.')
      console.log(err)
      res.status(500).send()
    } else {
      console.log('User removed')
      res.status(200).send()
      res.redirect('/logout')
    }
  })
})

module.exports = router
