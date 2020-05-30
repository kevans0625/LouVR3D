const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AutoIncrement = require("mongoose-sequence")(mongoose);

const imageSchema = new Schema({
    image_id: { type: Number, default: 0 },
    description: { type: String },
    fileLink: { type: String },
    s3_key: { type: String }
    },
    {
    timestamps: true
    }
);

imageSchema.plugin(AutoIncrement, { inc_field: "image_id"});
const Image = mongoose.model("Image", imageSchema);
// User.createIndexes();
module.exports = Image