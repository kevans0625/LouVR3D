const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '5gb', parameterLimit: 10000 }));
// app.use(express.bodyParser.json());
// app.use(bodyParser({limit: '5mb'}));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Louvr3dusers");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});