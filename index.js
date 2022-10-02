const express = require("express");

const path = require('path')
var cors = require('cors')
require('dotenv').config()

const routes = require("./routes");

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://bhld-95d22.as.r.appspot.com/");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Expose-Headers', 'Content-Range')
  next();
});

// middleware
app.use(express.json());
app.use(cors())

//routes
app.use("/api", routes);

const port = 8000
//set up
app.listen(port, () => {
  console.log("Listening on port " + port);
});
