const db = require("../models");

module.exports = {
    create: function(req, res) {
        db.User
        .create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        .then(dbModel => res.json(dbModel))
        .catch(function(err) {
            if (err.name == 'ValidationError') {
                console.error('Error Validating!', err);
                // res.send('Error Validating!').json(err);
                res.status(422).json(err);
            } else {
                console.error('Errorssssss Validating!', err);
                res.status(500).json(err);
            }
        })
},
    //     .catch(err => {console.log(err) 
    //         res.status(422).json(err)})
    // },
    findAll: function(req, res) {
          db.User
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        },
    findById: function(req, res) {
          db.User
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        },
    update: function(req, res) {
          db.User
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        },
    remove: function(req, res) {
          db.User
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        }
};