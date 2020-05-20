const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/users"
);

const userSeed = [{
    username: "StephenKing",
    email: "TheDead@gmail.com",
    password:"3dspheres"
},
{
    username: "William123Golding",
    email: "Lord of @gmail.com",
    password:"twirl"
},
{
    username: "J.D.Salinger",
    email: "TheCatc@gmail.com",
    password:"twinkies67"
},
{
    username: "TallMan.Klein",
    email: "ThePunc@gmail.com",
    password:"!shoe34"
},
{
    email: "HarryPo@gmail.com",
      username: "J.K.Balling",
    password:"k9g9dfiy&"
},
{
    username: "Neil_Gaiman",
    email: "Coraline@gmail.com",
    password:"w156guapp"
},
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
