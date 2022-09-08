const express = require("express");
var cors = require('cors')

//const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

// middleware
app.use(express.json());
app.use(cors())

//routes
app.use("/api", routes);

//set up
app.listen(process.env.PORT, () => {
  console.log("Listening on port " + process.env.PORT);
});
