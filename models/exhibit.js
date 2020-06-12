const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exhibitSchema = new Schema({
    title: {type: String},
    artist: {type: String},
    department: {type: String},
    image: {type: String},
    userID: {type: String}
    
})

const Exhibit = mongoose.model("Exhibit", exhibitSchema);

module.exports = Exhibit;