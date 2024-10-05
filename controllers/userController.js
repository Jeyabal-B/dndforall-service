const express = require('express')
const app = express();
const User = require('../models/user')
const asyncHandler = require('express-async-handler')

app.use(express.json());

const userService = require('../services/userService');

const users = [{id: 101, name: "Jey"}];

//APIs are already defined in the userRoutes, define the methods
exports.getAllUsers = async (request, response) => {
    const allUsers = await User.find();
    response.send(allUsers);
}

exports.getUserById = (request, response) => {
    const user = users.find(u => u.id == parseInt(request.params.id))
    if(!user) return response.status(404).send("User does not exist")
    response.send(user);
}


/*
exports.addUser = asyncHandler( async (request, response) => {
    console.log("Received Request to create a new user : ", request.body);
    const { name } = request.body;
    if(!name){
        response.status(400);
        throw new Error("All fields are mandatory")
    }
    const user = await User.create({
        name
    });

    response.status(201).json(user);
});

*/