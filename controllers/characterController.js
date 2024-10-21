const express = require('express')
const app = express();
const characters = require('../models/character')
const asyncHandler = require('express-async-handler')

app.use(express.json());

const characterService = require('../services/characterService');

//APIs are already defined in the characterRoutes, define the methods
exports.getAllCharacters = async (request, response) => {
    console.log("Request received to fetch all the characters");
    const allCharacters = await characters.find();
    console.log("Total characters fetched : ", allCharacters.length);
    response.status(200).json(allCharacters);
}

exports.getCharacterById = async (request, response) => {
    console.log("Request received to find the character by charId : ", request.params);
    try {
        const character = await characters.findOne({ charId: request.params.charId })
        if (!character) {
            return response.status(404).send("Character does not exist")
        }
        response.send(character);
    }
    catch (err) {
        console.error("Error finding character:", err);
        response.status(500).send("Server error");
    }
}

exports.addCharacter = async (request, response) => {
    console.log("Request received to create a new character : ", request.body);
    const { name } = request.body;
    if (!name) {
        response.status(400);
        throw new Error("All fields are mandatory")
    }
    const character = await characters.create(request.body);
    console.log("Character successfully created!");
    response.status(201).json(character);
};

exports.deleteCharacter = async (request, response) => {
    console.log("Request received to delete the character : ", request.body);
    const { charId } = request.body;
    if (!charId) {
        return response.status(400).json({ error: "charId is mandatory" });
    }
    try {
        const character = await characters.findOne({ charId });
        if (!character) {
            return response.status(404).json({ error: `Character with the charId ${charId} was not found` });
        }
        await characters.deleteOne({ charId });
        console.log(`Character with the charId ${charId} successfully deleted!`);
        response.status(204).send();
    } catch (err) {
        console.error("Error occured while deleting the character : ", err);
        response.status(500).json({ error: "Error occured while deleting the character" });
    }
}

exports.updateCharacter = async (request, response) => {
    console.log("Request received to update the character : ", request.body);
    //Extracts the charId first, and then assigns the remaining fields to the updates object
    const { charId, ...updates } = request.body;
    if (!charId) {
        return response.status(400).json({ error: "charId is mandatory" });
    }
    console.log("Data to be updated : ", updates);
    if( !updates || typeof updates !== 'object') {
        return response.status(400).json({ error: "The given fields are not valid" });
    }
    try {
        const updatedCharacter = await characters.findOneAndUpdate (
            { charId },
            { $set: updates },
            { new: true } // returns the updated document
        );
        if (!updatedCharacter) {
            return response.status(404).json({ error: `Character with the charId ${charId} was not found` });
        }
        console.log(`Successfully updated the character with the charId : ${charId}`);
        response.status(200).json({ message: `Successfully updated the character with the charId ${charId}!`, updatedCharacter });
    } catch (err) {
        console.error("Error occured while updating the character : ", err);
        response.status(500).json({ error: "Error occured while updating the character" });
    }
}