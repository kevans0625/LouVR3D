const db = require("../models");

module.exports = {
     create: function(req, res) {
         db.Exhibit
         .create({
             title: req.body.title,
             artist: req.body.artist,
             department: req.body.department,
             image: req.body.image,
             key: req.body.key
         })
        .then(dbModel => res.json(dbModel))
        .then(console.log("hello"))
        .catch(err => {console.log(err) 
            res.status(422).json(err)})
     }
};