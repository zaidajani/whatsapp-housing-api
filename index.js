const express = require("express");
const mongoose = require("mongoose");
const api = require("./routes/api");
const port = 4000;
const app = express();

mongoose.connect("mongodb://localhost/housing-wa", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB");
}).catch(err => {
  console.log("Error:", err.message);
});

app.use(express.json());
app.use("/", api);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});