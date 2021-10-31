const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  query: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

const Userquery = mongoose.model('Queries', schema);
exports.Userquery = Userquery;