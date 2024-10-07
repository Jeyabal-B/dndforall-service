const express = require('express')
const app = express();
const users = require('../models/user')
const asyncHandler = require('express-async-handler')

app.use(express.json());

const userService = require('../services/userService');

//APIs are already defined in the userRoutes, define the methods
exports.getAllUsers = async (request, response) => {
    const allUsers = await users.find();
    console.log("found values : ", allUsers);
    response.status(200).json(allUsers);
    //response.send(allUsers);
}

exports.getUserById = (request, response) => {
    const user = users.find(u => u.id == parseInt(request.params.id))
    if(!user) return response.status(404).send("User does not exist")
    response.send(user);
}


exports.addUser = async (request, response) => {
    console.log("Received Request to create a new user : ", request.body);
    const { name } = request.body;
    if(!name){
        response.status(400);
        throw new Error("All fields are mandatory")
    }
    const user = await users.create(request.body);
    console.log("Character successfully created!");
    response.status(201).json(user);
    
};