const express = require('express');
const router = express.Router();
const characterController = require('../controllers/characterController');
/**
 * @swagger
 * tags:
 *   name: Characters
 *   description: Character management operations
 */

//Defining the APIs and map the corresponding methods in controllers

/**
 * @swagger
 * /characters/getAll:
 *   get:
 *     summary: Retrieve a list of all characters
 *     tags: [Characters]
 *     responses:
 *       200:
 *         description: A list of characters
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Character'
 */
router.get('/getAll', characterController.getAllCharacters);

/**
 * @swagger
 * /characters/{charId}:
 *   get:
 *     summary: Retrieve a character by charId
 *     tags: [Characters]
 *     parameters:
 *       - in: path
 *         name: charId
 *         required: true
 *         description: The ID of the character to retrieve
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Character object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Character'
 *       404:
 *         description: Character not found
 */
router.get('/:charId', characterController.getCharacterById);

/**
 * @swagger
 * /characters/add:
 *   post:
 *     summary: Add a new character
 *     tags: [Characters]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *             schema:
 *               $ref: '#/components/schemas/Character'
 *     responses:
 *       201:
 *         description: Character created successfully
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Character'
 *       400:
 *         description: Invalid input
 */
router.post('/add', characterController.addCharacter);

/**
 * @swagger
 * /characters:
 *   delete:
 *     summary: Delete a character
 *     tags: [Characters]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               charId:
 *                 type: integer
 *     responses:
 *       204:
 *         description: Character deleted successfully
 *       404:
 *         description: Character not found
 */
router.delete('/', characterController.deleteCharacter);

/**
 * @swagger
 * /characters:
 *   put:
 *     summary: Update an existing character
 *     tags: [Characters]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *               $ref: '#/components/schemas/Character'
 *     responses:
 *       200:
 *         description: Character updated successfully
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Character'
 *       404:
 *         description: Character not found
 *       400:
 *         description: Invalid input
 */
router.put('/', characterController.updateCharacter);

module.exports = router;