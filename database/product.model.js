const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: String,
    normed_name: String,
    parent_path: String,
    description: String,
    price: Number,
    features: [{
        type: String,
        value: String
    }],
    image: {
        src: String,
        title: String
    }
})

module.exports = mongoose.model("products", ProductSchema)