const express = require('express')
const router = express.Router()

router.get('/logout', (req, res) => {
  req.session.destroy()
  console.log('Succesfully logged out')
  res.redirect('/login')
  res.status(200).send()
})

module.exports = router
