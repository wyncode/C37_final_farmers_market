const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid.');
      }
    }
  },
  password: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (value.toLowerCase() === 'password') {
        throw new Error("Pssword can't be password.");
      }
      if (value.length < 6) {
        throw new Error('Password must be at least 6 characters long.');
      }
    }
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
