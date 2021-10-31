const express = require("express");
const router = express.Router();
const { Home } = require("../models/home");
const { Userquery } = require("../models/userquery.js");
const cors = require('cors');

router.use(cors());

async function addHomes(name, state, city, zip, address, owner, phone) {
  const home = new Home({
    house: name,
    state: state,
    city: city,
    zip: zip,
    address: address,
    owner: owner,
    phone: phone
  }); 
  await home.save();

  return home;
}

async function addquery(query, date) {
  const userquery = new Userquery({
    query: query
  });
  await userquery.save();
  return userquery;
}
  

router.get("/", async (req, res) => {
  const homes = await Home.find();
  res.send(homes);
});

router.post('/home', async (req, res) => {
  const { name, state, city, zip, address, owner, phone } = req.body;
  const home = await addHomes(name, state, city, zip, address, owner, phone);
  res.send(home); 
});

router.post('/userquery', async (req, res) => {
  const {query} = req.body;
  const request = await addquery(query);
  res.send(request);
});

module.exports = router; 
