const express = require('express')
const app = express();
const characters = require('../models/character')
const asyncHandler = require('express-async-handler')

app.use(express.json());

const characterService = require('../services/characterService');

//const characters = [{id: 1001, name: "Darco", class: "Warlock"}];

//APIs are already defined in the characterRoutes, define the methods
exports.getAllCharacters = async (request, response) => {
    const allCharacters = await characters.find();
    console.log("found values : ", allCharacters);
    response.status(200).json(allCharacters);
}

exports.getCharacterById = (request, response) => {
    const character = characters.find(u => u.id == parseInt(request.params.id))
    if(!character) return response.status(404).send("Character does not exist")
    response.send(character);
}

exports.addCharacter = async (request, response) => {
    console.log("Received Request to create a new character : ", request.body);
    const { name } = request.body;
    if(!name){
        response.status(400);
        throw new Error("All fields are mandatory")
    }
    const character = await characters.create(request.body);
    console.log("Character successfully created!");
    response.status(201).json(character);
};