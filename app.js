const express = require('express');
const app = express();
const PORT = 8080;
const connectDB = require('./configs/databaseConnection')

//Importing the routes, thereby getting all APIs mapped
const userRoutes = require('./routes/userRoutes');
const characterRoutes = require('./routes/characterRoutes');

connectDB();

//Middleware for parsing JSON requests
app.use(express.json());

app.use('/users', userRoutes);
app.use('/characters', characterRoutes);

app.listen(PORT, () => {
    console.log('Listening on port : ' + PORT);
});

