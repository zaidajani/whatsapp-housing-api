const mongoose = require('mongoose');

const userquery = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  query: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

const Userquery = mongoose.model('home', userquery);
exports.Userquery = Userquery;