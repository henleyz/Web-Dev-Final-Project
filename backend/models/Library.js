const mongoose = require("mongoose");
const LibraySchema = mongoose.Schema({
    name: {
        type: String,
        required: true 
    },
    open_time: {
        type: Number,
        required: true 
    },
    close_time: {
        type: Number,
        required: true 
    },
    latitude: {
        type: Number,
        required: true 
    },
    longitude: {
        type: Number,
        required: true 
    },
    short_description: {
        type: String,
        required: true
    },
    long_description: {
        type: String,
        required: true
    },
    image1_link: {
        type: String,
        required: true
    },
    image2_link:{
        type: String,
        required: true
    },
    rating: Number
})

module.exports = mongoose.model("library", LibraySchema)