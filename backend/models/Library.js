const mongoose = require("mongoose");
//const { list } = require("tar");
const LibraySchema = mongoose.Schema({
    name: {
        type: String,
        required: true 
    },
    full_name: {
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
    total_rate:{
        type: Number,
        default: 0
    },
    total_reviews:{
        type: Number,
        default: 0
    },
    rating: {
        type: Number,
        default: 0
    },
    venue_id: {
        type: String
    },
    base_noise_level: {
        type: Number
    }

})

module.exports = mongoose.model("library", LibraySchema)