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
         (console.log(req.params))
         db.Exhibit
            .find({userID: req.params.id})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
     },
     findAll: function(req, res) {
         db.Exhibit
         .find(req.query)
         .then(dbModel => { 
            console.log(dbModel)
             res.json(dbModel)})
        .catch(err => res.status(422).json(err));
     },
     remove: function(req, res) {
        (console.log(req.params.id))
        db.Exhibit
         .findById({ _id: req.params.id })
         .then(dbModel => dbModel.remove())
         .then(dbModel => res.json(dbModel))
         .catch(err => res.status(422).json(err));
     }
};