const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
let SALT_WORK_FACTOR = process.env.SALT_WORK_FACTOR;

const userSchema = new Schema({
    username: {
        type: String, 
        required: true,
        index: 
       { unique: true }
    },
    email:{
        type: String, 
        required: true,
            unique: true,
            dropDups: true
    },
    password: {type: String, required: true},
    avatar: {type: String}
});

userSchema.plugin(uniqueValidator);

userSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

// userSchema.methods.comparePassword = function(candidatePassword, cb) {
//     bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
//         if (err) return cb(err);
//         cb(null, isMatch);
//     });
// };

const User = mongoose.model("User", userSchema);
User.createIndexes();

module.exports = User