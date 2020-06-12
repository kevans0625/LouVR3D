const db = require("../models");
module.exports = {
     create: function(req, res) {
         db.Exhibit
         .create({
             title: req.body.title,
             artist: req.body.artist,
             department: req.body.department,
             image: req.body.image,
             key: req.body.key,
             userID: req.body.userID
         })
        .then(dbModel => res.json(dbModel))
        .then(console.log("hello"))
        .catch(err => {console.log(err) 
            res.status(422).json(err)})
     },
     findById: function(req, res) {
         db.Exhibit
            .findById(req.params.userID)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
     },
     findAll: function(req, res) {
         db.Exhibit
         .find(req.query)
         .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
     }
};