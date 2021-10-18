const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  house: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  }
});

const Home = mongoose.model('Home', schema);

exports.Home = Home;