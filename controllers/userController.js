const db = require("../models");

module.exports = {
    create: async (req, res) => {
        const { username, email, password } = req.body;
     
        if (!username || !email || !password) {
          return res.send({
            success: false,
            message: 'Error: All fields must be completed.'
          });
        }
        const existingUser =  await db.User.findOne({email: email})
        console.log(existingUser)
        if (!existingUser == null){
            return res.status(400).json({msg: "An account with this email address already exist."})
        }
         
        db.User
        .create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        .then(dbModel => res.json(dbModel))
        .catch(function(err) {
            if (err.name == 'ValidationError') {
                console.error('Error Validating!');
                // res.send('Error Validating!').json(err);
                res.status(422).json({message: err});
            } else {
                console.error('Validating!', err);
                res.status(500).json({ error: err.message
                });
            }
        })
    
},        
    findAll:   async (req, res) => {
          db.User
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json({ error: err.message
            }));
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