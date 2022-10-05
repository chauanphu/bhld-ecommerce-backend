const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: String,
    normed_name: String,
    path: String,
    description: String,
    price: Number,
    features: [{
        type: String,
        value: String
    }],
    sub_items: Array
})

module.exports = mongoose.model("products", ProductSchema)