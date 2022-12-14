const express = require("express");

var cors = require('cors')
require('dotenv').config()
const routes = require("./routes");
// Setup databases
const mongoose = require('mongoose');
const MONGO_URL = process.env.MONGO_URL

mongoose.connect(MONGO_URL).then(
  console.log('Database Connected')
)
  .catch(err => {
    console.error('Failed: ', err)
  })

const app = express();

// Set limit
app.use(express.json({ limit: '8mb' }));
app.use(express.urlencoded({ limit: '8mb' }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://bhld-95d22.as.r.appspot.com/");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Expose-Headers', 'Content-Range  ')
  next();
});

// middleware
app.use(express.json());
app.use(cors())

//routes
app.use("/api", routes);

const port = process.env.PORT || 8000
//set up
app.listen(port, () => {
  console.log("Listening on port " + port);
});