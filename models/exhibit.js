const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exhibitSchema = new Schema({
    title: {type: String},
    description: {type: String},
    image: {type: String}
})