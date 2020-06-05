const db = require("../models");

module.exports = {
     create: function(req, res) {
         db.Favorite
         .create({
             title: req.body.title,
             artist: req.body.artist,
             department: req.body.department,
             image: req.body.image
         })
        .then(dbModel => res.json(dbModel))
        .catch(err => {console.log(err) 
            res.status(422).json(err)})
     }
};