const express = require('express')
const router = express.Router()
const User = require('./user-schema')

/*  When the url /update is hit, the function bellow will get the user id through the input field. Then it will check if the id matches
an object (user) in the databse. If it does, it will take that object and replace all properties with the matching input fields. But only
if they are filled in. Then it will save this new object which will override the existing one. At last, the profile-overview
page will be rendered again with the freshly updated data.  */

router.post('/character-match', (req, res) => {
  const id = req.session.userData._id
  User.findOne({ _id: id }, (err, foundObject) => {
    if (err) {
      console.log(err)
      res.status(500).send()
    } else {
      if (!foundObject) {
        console.log('User not found in database')
        res.status(404).send()
      } else {
        console.log('user found: ', foundObject)
        if (req.body.a) {
          foundObject.sameDisability = req.body.a
        } if (req.body.b) {
          foundObject.lookingFor = req.body.b
        } if (req.body.c) {
          foundObject.sameCity = req.body.c
        } if (req.body.d) {
          foundObject.characterFirst = req.body.d
        } if (req.body.f) {
          foundObject.characterSecond = req.body.f
        } if (req.body.g) {
          foundObject.characterThird = req.body.g
        } if (req.body.h) {
          foundObject.characterFourth = req.body.h
        } if (req.body.i) {
          foundObject.characterFifth = req.body.i
        } if (req.body.j) {
          foundObject.characterSixth = req.body.j
        }

        foundObject.save((err, updatedObject) => {
          if (err) {
            req.flash('failedUpdate', 'Er is iets mis gegaan. Probeer het opnieuw.')
            console.log(err)
            res.status(500).send()
          } else {
            req.flash('succesUpdate', 'Je gebruikersprofiel is geüpdatet')
            res.render('profile-overview', {
              succesLogin: req.flash('succesLogin'),
              succesUpdate: req.flash('succesUpdate'),
              title: 'Profile overview',
              firstLink: 'Ik ben', // Top nav menu item
              secondLink: 'Ik ben opzoek naar',
              firstAnchor: '../profile-overview', // Top nav menu anchor links
              secondAnchor: '../profile-overview',
              userData: updatedObject
            })
          }
        })
      }
    }
  })
})

module.exports = router


module.exports = router
