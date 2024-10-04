const express = require('express');
const router = express.Router();
const characterController = require('../controllers/characterController');

//Defining the APIs and map the corresponding methods in controllers
router.get('/getAll', characterController.getAllCharacters);
router.get('/:id', characterController.getCharacterById);

module.exports = router;