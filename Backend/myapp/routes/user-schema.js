const mongoose = require('mongoose')

// Define my framework for the database users
const mySchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
  gender: String,
  age: String,
  address: String,
  disability: String,
  hobbies: String,
  about: String
})

const User = mongoose.model('users', mySchema)

module.exports = User
