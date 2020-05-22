const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

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
    password: {type: String, required: true}
});

userSchema.plugin(uniqueValidator);
const User = mongoose.model("User", userSchema);
// User.createIndexes();
module.exports = User