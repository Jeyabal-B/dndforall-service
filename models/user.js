const mongoose = require('mongoose');

//keeping this object simple for testing purposes
const userSchema = mongoose.Schema({
    name: String,
    username: String,
    userId: Number,
    isActive: Boolean,
    isPremiumUser: Boolean,
    gender: String,
    age: Number,
    accountCreatedOn: Date,
    memberSince: String,
    charactersCreated: [{}],
    isInActiveCampaign: Boolean,
    campaignInfo: {}
});

module.exports = mongoose.model('Users', userSchema);