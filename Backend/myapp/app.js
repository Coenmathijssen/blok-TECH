const express = require('express')
const path = require('path')

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
    title: 'This title is dynamicly rendered',
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

// Handling the 404 error page
app.get('*', function (req, res) {
  res.status(404).send('<h1>I`m sorry, the page you were looking for is not here <br> 404</h1>')
})
