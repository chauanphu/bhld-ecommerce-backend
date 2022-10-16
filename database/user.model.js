const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: {
        type: String,
        enum: ['admin']
    }
})

module.exports = mongoose.model("users", UserSchema)