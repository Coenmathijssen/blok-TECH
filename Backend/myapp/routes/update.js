const express = require('express')
const router = express.Router()
const User = require('./user-schema')
const mongoose = require('mongoose')

router.post('/update', (req, res) => {
  console.log('running')
  const id = req.body.id
  console.log(id)
  User.findOne({ _id : id }, (err, foundObject) => {
    if (err) {
      console.log(err)
      res.status(500).send()
    } else {
      if (!foundObject) {
        console.log('User not found in database')
        res.status(404).send()
      } else {
        console.log('user found: ', foundObject)
        if (req.body.firstName) {
          foundObject.firstName = req.body.firstName
        } if (req.body.lastName) {
          foundObject.lastName = req.body.lastName
        } if (req.body.email) {
          foundObject.email = req.body.email
        } if (req.body.password) {
          foundObject.password = req.body.password
        }
        foundObject.save((err, updatedObject) => {
          if (err) {
            console.log(err)
            res.status(500).send()
          } else {
            res.send(updatedObject)
          }
        })
      }
    }
  })
})

module.exports = router
