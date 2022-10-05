const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
    name: String,
    normed_name: String,
    sub_items: [{
        name: String,
        normed_name: String
    }]
})

module.exports = mongoose.model("categories", CategorySchema)