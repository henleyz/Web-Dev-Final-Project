const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema({
    username: {
        type: String,
    },
    content: {
        type: String,
        required: true // Have to be exist when creating new user.
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})
module.exports = mongoose.model("review", ReviewSchema);