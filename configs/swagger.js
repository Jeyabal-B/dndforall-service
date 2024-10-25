const character = require('../models/character');
const user = require('../models/user');
const { version } = require('mongoose');
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express');
const mongooseToSwagger  = require('mongoose-to-swagger');
//const { default: swaggerSchemas } = require('../schemas/swaggerSchemas');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'D&D For All',
            version: '1.0.0',
            description: 'API Documentation for the D&D For All services'
        },
        servers: [
            {
                url: 'http://localhost:8080', // Your server URL
            }
        ],
        /*components: {
            schemas: swaggerSchemas
        }*/
        components: {
            schemas: {
                Character: mongooseToSwagger(character),
                User: mongooseToSwagger(user),
            }
        }
    },
    apis: [ './routes/*.js'] // Path to the API routing configuration files
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = { swaggerUi, swaggerDocs };