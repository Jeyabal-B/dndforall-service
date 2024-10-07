const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    userId: Number
});

module.exports = mongoose.model('Users', userSchema);