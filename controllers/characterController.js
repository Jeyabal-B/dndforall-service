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
        return response.status(400).json({ error: "Key is mandatory" }); // Send JSON response
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
        response.status(500).json({ error: "Server Error", message: err.message });
    }
}