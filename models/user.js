const mongoose = require('mongoose');

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
    campaignInfo: {},
    graphics: {
        displayAvatarUrl: String,
        frame: String,
        backdrop:{
            backdropUrl: String
        },
        theme: String
    },
    misc: {}
});

module.exports = mongoose.model('Users', userSchema);