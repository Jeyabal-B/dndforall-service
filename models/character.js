const mongoose = require('mongoose');

//keeping this object simple for testing purposes
const characterSchema = mongoose.Schema({
    name: String,
    userId: Number,
    charId: Number,
    gender: String,
    class: String,
    level: Number,
    race: String,
    faith: String,
    backgroundInfo: String,
    currencies: {
        sp: Number,
        gp: Number
    },
    feats: String,  
    spellSlots: Number,
    abilityScores: {},
    proficiencies: {},
    expertises: {},
    maxHitPoints: Number,
    currentHitPoints: Number,
    temporaryHitPoints: Number,
    bonusHitPoints: Number,
    currentXp: Number,
    walkingSpeed: Number,
    carryCapacity: Number,
    fightingStyles: [String]
});

module.exports = mongoose.model('Characters', characterSchema);