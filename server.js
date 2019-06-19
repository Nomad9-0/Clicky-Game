// Dependancies
var express = require("express");
var mongoose = require("mongoose");


// Initialize Express
var app = express();

app.use(express.static("public"));
var PORT = process.env.PORT || 3000;
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://user:userpassword27@ds241097.mlab.com:41097/heroku_0k4j92wc";

mongoose.connect(MONGODB_URI);

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Listen on port 3000
app.listen(PORT, function() {
  console.log("App running on port 3000!");
});