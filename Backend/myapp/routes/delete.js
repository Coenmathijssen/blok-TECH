const express = require('express')
const router = express.Router()
const User = require('./user-schema')

router.get('/delete', (req, res) => {
  const id = req.session.userData._id
  User.findOneAndRemove({ _id: id }, (err) => {
    if (err) {
      console.log(err)
      res.status(500).send()
    } else {
      console.log('User removed')
      return res.status(200).send()
    }
  })
})

module.exports = router
