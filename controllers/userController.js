const express = require('express')
const app = express();

app.use(express.json());

const userService = require('../services/userService');

const users = [{id: 101, name: "Jey"}];

//APIs are already defined in the userRoutes, define the methods
exports.getAllUsers = (request, response) => {
    response.send(users);
}

exports.getUserById = (request, response) => {
    const user = users.find(u => u.id == parseInt(request.params.id))
    if(!user) return response.status(404).send("User does not exist")
    response.send(user);
}