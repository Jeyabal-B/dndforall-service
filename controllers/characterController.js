const express = require('express')
const app = express();

app.use(express.json());

const characterService = require('../services/characterService');

const characters = [{id: 1001, name: "Darco", class: "Warlock"}];

//APIs are already defined in the characterRoutes, define the methods
exports.getAllCharacters = (request, response) => {
    response.send(characters);
}

exports.getCharacterById = (request, response) => {
    const character = characters.find(u => u.id == parseInt(request.params.id))
    if(!character) return response.status(404).send("Character does not exist")
    response.send(character);
}