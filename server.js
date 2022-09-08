const express = require("express");
const path = require('path')
var cors = require('cors')
require('dotenv').config()

const routes = require("./routes");

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://bhld-95d22.as.r.appspot.com/");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// middleware
app.use(express.json());
app.use(cors())

//routes
app.use("/api", routes);

//set up
app.listen(process.env.PORT || 8080, () => {
  console.log("Listening on port " + process.env.PORT);
});
