const mongoose = require('mongoose');

const characterSchema = mongoose.Schema({
    name: String,
    userId: Number,
    charId: Number,
    gender: String,
    class: {
        startingClass: String,
        isMultiClass: Boolean,
        hitDiceDesignated: Number,
        hitDiceUsed: Number,
        subClass: String,
        isSpellCaster: Boolean,
        spellCastingAbility:{
            spellCasterType: String,
            spellRecoveryOn: String,
            startingSpellSlots: Number,
            maxSpellSlots: Number,
            currentSpellSlots: Number
        },
        classFeatures: [{
            featureId: Number,
            featureType: String,
            featureName: String,
            prerequisite: String,
            description: String,
            displayOrder: Number,
            limitations: String
        }],
    },
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
    
    spellSkills: {
        spellSlots: Number,
        knownSpells:[{
            spell:{
                spellId: Number,
                spellType: String,
                name: String,
                preparationTime: String,
                actionRequired: String,
                componentsRequired: [String],
                displayOrder: Number
            }
        }],
    },
    abilityScores: {},
    proficiencies: {},
    expertises: {},
    abilityChecks: {
        advantages: {},
        disadvantages: {}
    },
    savingThrows: {
        advantages: {},
        disadvantages: {}
    },
    deathSaves:{
        isStable: Boolean,
        successfulSaves: Number,
        failedSaves: Number,
        totalSavesRequired: Number
        //should i move this to config - its always 3
    },
    maxHitPoints: Number,
    currentHitPoints: Number,
    temporaryHitPoints: Number,
    bonusHitPoints: Number,
    currentXp: Number,
    speeds:{
        walkingSpeed: Number,
        runningSpeed: Number,
        flyingSpeed: Number,
        swimmingSpeed: Number,
        climbingSpeed: Number
    },
    carryCapacity:{
        weightCarry: Number,
        pushDragLift: Number
    },
    inventory: [{
        entityId: Number,
        entitytype: String,
        entityDefinition: {
            eqpId: Number,
            eqpType: String,
            isEquipped: Boolean,
            isMagic: Boolean,
            isHomebrew: Boolean,
            isAttunable: Boolean,
            isConsumable: Boolean,
            rarity: String,
            cost: Number,
            weight: Number,
            descirption: String
        }
    }],

    fightingStyles: [String],
    actionEconomy: {
        actionsPerTurn: Number,
        actionsAvailable: [String],
        bonusActionsAvailable: [String],
    }
});

module.exports = mongoose.model('Characters', characterSchema);