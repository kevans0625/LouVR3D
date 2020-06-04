const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exhibitSchema = new Schema({
    title: {type: String},
    description: {type: String},
    image: {type: String}
})

const Exhibit = mongoose.model("Exhibit", exhibitSchema);

module.exports = Exhibit;