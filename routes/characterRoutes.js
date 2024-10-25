const express = require('express');
const router = express.Router();
const characterController = require('../controllers/characterController');

//Defining the APIs and map the corresponding methods in controllers
router.get('/getAll', characterController.getAllCharacters);
router.get('/:charId', characterController.getCharacterById);
router.post('/add', characterController.addCharacter);
router.delete('/', characterController.deleteCharacter);
router.put('/', characterController.updateCharacter);

module.exports = router;