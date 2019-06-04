const mongoose = require('mongoose')

// Define my framework for the database users
const mySchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, unique: true, required: true },
  gender: String,
  age: Number,
  address: String,
  disability: String,
  hobbies: String,
  about: String
})

const User = mongoose.model('users', mySchema)

module.exports = User
