const express = require("express");
// const bodyParser = require("body-parser")
const mongoose = require("mongoose");
const routes = require("./routes");
const morgan = require('morgan')

const app = express();
const PORT = process.env.PORT || 3001;

//fot loggging details to the server
app.use(morgan('dev'))

// Define middleware here
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '5gb', parameterLimit: 10000 }));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);


// Connect to the Mongo DB
mongoose
.connect(process.env.MONGODB_URI || "mongodb://localhost/Louvr3dusers", {useNewUrlParser: true})
.catch(err => console.log(err));

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});