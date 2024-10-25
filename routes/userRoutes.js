const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//Defining the APIs and map the corresponding methods in controllers
router.get('/getAll', userController.getAllUsers);
router.get('/:userId', userController.getUserById);
router.post('/add', userController.addUser);
router.delete('/', userController.deleteUser);
router.put('/', userController.updateuser);

module.exports = router;