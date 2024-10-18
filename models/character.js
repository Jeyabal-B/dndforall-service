const mongoose = require('mongoose');

const characterSchema = mongoose.Schema({
    name: String,
    userId: Number,
    charId: Number,
    gender: String,
    class: String,
    race: String,
    maxHitPoints: Number,
    currentHitPoints: Number,
    temporaryHitPoints: Number,
    alignmentId: Number,
    lifeStyleId: Number,
    backgroundInfo: {},
    inventory: {},
    currencies: {
        sp: Number,
        gp: Number
    },
    feats: String,
    spellSlots: Number,
    abilityScores: {}
});

module.exports = mongoose.model('Characters', characterSchema);