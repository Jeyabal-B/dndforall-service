const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//Defining the APIs and map the corresponding methods in controllers
router.get('/getAll', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/add', userController.addUser);

module.exports = router;