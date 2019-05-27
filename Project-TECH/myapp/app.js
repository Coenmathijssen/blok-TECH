const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const mongojs = require('mongojs')
const db = mongojs('database', ['users'])

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

// Import and use multiple route js files and use them in the app.js
const router = require('./routes/render-pages.js')
const errorRoute = require('./routes/add-to-database.js')
app.use(router)
app.use(errorRoute)
