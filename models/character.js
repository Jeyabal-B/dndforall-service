const mongoose = require('mongoose');

const characterSchema = mongoose.Schema({
    name: String,
    userId: Number,
    charId: Number,
    gender: String,
    class: String,
    race: {
        baseRace: String,
        raceId: Number,
        raceDescription: String,
        isSubRace: Boolean,
        subRace: String,
        subRaceId: Number,
        subRaceDescription: String,
        racialTraits: [{}]
    },    
    alignmentId: Number,
    lifeStyleId: Number,
    faith: String,
    appearance: {
        height: String,
        weight: String,
        eyes: String,
        skin: String,
        hair: String,
        facialHair: String,       
        birthmarks: String
    },
    backgroundInfo: {},
    inventory: {},
    currencies: {
        sp: Number,
        gp: Number
    },
    graphics: {
        displayAvatarUrl: String,
        frame: String,
        backdrop:{
            backdropUrl: String
        },
        theme: String
    },
    feats: String,
    spellSlots: Number,
    abilityScores: {},
    maxHitPoints: Number,
    currentHitPoints: Number,
    temporaryHitPoints: Number,
    bonusHitPoints: Number,
    currentXp: Number,
    speeds:{
        walkingSpeed: Number,
        runningSpeed: Number,
        walkingSpeed: Number,
        walkingSpeed: Number,
    }
    

});

module.exports = mongoose.model('Characters', characterSchema);