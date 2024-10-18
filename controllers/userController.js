const express = require('express')
const app = express();
const users = require('../models/user')
const asyncHandler = require('express-async-handler')

app.use(express.json());

const userService = require('../services/userService');

//APIs are already defined in the userRoutes, define the methods
exports.getAllUsers = async (request, response) => {
    console.log("Request received to find all the users");
    const allUsers = await users.find();
    console.log("found values : ", allUsers);
    response.status(200).json(allUsers);
}

exports.getUserById = async (request, response) => {
    console.log("Received Request to find the user by userId : ", request.params);
    try {
        const user = await users.findOne({ userId: request.params.userId})
        if (!user) {
            return response.status(404).send("User does not exist")
        }
        response.send(user);
    }
    catch (err) {
        console.error("Error finding user:", err);
        response.status(500).send("Server error");
    }
}

exports.addUser = async (request, response) => {
    console.log("Received Request to create a new user : ", request.body);
    const { name } = request.body;
    if (!name) {
        response.status(400);
        throw new Error("All fields are mandatory")
    }
    const user = await users.create(request.body);
    console.log("Character successfully created!");
    response.status(201).json(user);

};