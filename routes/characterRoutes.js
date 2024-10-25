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
 *                 type: object
 *                 properties:
 *                   charId:
 *                     type: string
 *                   name:
 *                     type: string
 *                   class:
 *                     type: string
 *                   level:
 *                     type: integer
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
 *           type: string
 *     responses:
 *       200:
 *         description: Character object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 charId:
 *                   type: string
 *                 name:
 *                   type: string
 *                 class:
 *                   type: string
 *                 level:
 *                   type: integer
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
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               class:
 *                 type: string
 *               level:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Character created successfully
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
 *                 type: string
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
 *             type: object
 *             properties:
 *               charId:
 *                 type: string
 *               name:
 *                 type: string
 *               class:
 *                 type: string
 *               level:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Character updated successfully
 *       404:
 *         description: Character not found
 *       400:
 *         description: Invalid input
 */
router.put('/', characterController.updateCharacter);

module.exports = router;