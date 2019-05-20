const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')

// Init Express
const app = express()
const port = 3000

// Know which port Express is using
app.listen(port, () => console.log(`Listining to this port: ${port}!`))

// View Engine init
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//  Serve html, css and js files in the static directory
app.use(express.static(path.join(__dirname, 'static')))

// Init bodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Global variables
app.use((req, res, next) => {
  res.locals.errors = null
  next()
})

//  Express validator middleware
app.use(expressValidator())

// Testing the dynamically rendered content, for example: objects:
const users = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Flex'
  },
  {
    id: 2,
    firstName: 'Ronald',
    lastName: 'de Boer'
  },
  {
    id: 4,
    firstName: 'Gerard',
    lastName: 'Ekdom'
  }
]

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Hello world',
    titleSecond: 'This is a second title',
    users: users
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    titleSecond: 'This is a second title',
    users: users
  })
})

// Catch the form submission
app.post('/users/add', (req, res) => {
  // Error handling with Express validator
  req.checkBody('firstName', 'Please fill in your First Name').notEmpty()
  req.checkBody('lastName', 'Please fill in your Last name is required').notEmpty()
  req.checkBody('email', 'Your Email is required').notEmpty()

  let errors = req.validationErrors()

  if (errors) {
    res.render('index', {
      title: 'Hello world',
      titleSecond: 'This is a second title',
      users: users,
      errors: errors
    })
  } else {
    let newUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email
    }
    console.log(newUser)
  }
})

// Handling the 404 error page
app.get('*', function (req, res) {
  res.status(404).send('<h1>I`m sorry, the page you were looking for is not here <br> 404</h1>')
})
