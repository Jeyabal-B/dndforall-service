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
        console.log("User Object found : ", user);
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
    console.log("user successfully created!");
    response.status(201).json(user);

};

exports.updateuser = async (request, response) => {
    console.log("Request received to update the user : ", request.body);
    //Extracts the userId first, and then assigns the remaining fields to the updates object
    const { userId, ...updates } = request.body;
    if (!userId) {
        return response.status(400).json({ error: "userId is mandatory" });
    }
    console.log("Data to be updated : ", updates);
    if( !updates || typeof updates !== 'object') {
        return response.status(400).json({ error: "The given fields are not valid" });
    }
    try {
        const updateduser = await users.findOneAndUpdate (
            { userId },
            { $set: updates },
            { new: true } // returns the updated document
        );
        if (!updateduser) {
            return response.status(404).json({ error: `user with the userId ${userId} was not found` });
        }
        console.log(`Successfully updated the user with the userId : ${userId}`);
        response.status(200).json({ message: `Successfully updated the user with the userId ${userId}!`, updateduser });
    } catch (err) {
        console.error("Error occured while updating the user : ", err);
        response.status(500).json({ error: "Error occured while updating the user" });
    }
}

exports.deleteUser = async (request, response) => {
    console.log("Request received to delete the User : ", request.body);
    const { userId } = request.body;
    if (!userId) {
        return response.status(400).json({ error: "userId is mandatory" });
    }
    try {
        const user = await users.findOne({ userId });
        if (!user) {
            return response.status(404).json({ error: `User with the userId ${userId} was not found` });
        }
        await users.deleteOne({ userId });
        console.log(`user with the userId ${userId} successfully deleted!`);
        response.status(204).send();
    } catch (err) {
        console.error("Error occured while deleting the user : ", err);
        response.status(500).json({ error: "Error occured while deleting the user" });
    }
}