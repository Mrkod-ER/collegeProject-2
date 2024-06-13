const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password:Number,
    date: Date,
    startTime: String,
    endTime: String
})

module.exports = mongoose.model("users", userSchema);