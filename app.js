//import dotenv from "dotenv";

const express = require('express');
const app = express();
const PORT = 8080;
const connectDB = require('./configs/databaseConnection')
const { swaggerUi, swaggerDocs } = require('./configs/swagger');

//dotenv.config();

//Importing the routes, thereby getting all APIs mapped
const userRoutes = require('./routes/userRoutes');
const characterRoutes = require('./routes/characterRoutes');

connectDB();

//Middleware for parsing JSON requests
app.use(express.json());

//Using Swagger
app.use('/swagger-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//Setting Routes
app.use('/users', userRoutes);
app.use('/characters', characterRoutes);

app.listen(PORT, () => {
    console.log('Listening on port : ' + PORT);
});
