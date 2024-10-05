const express = require('express');
const app = express();
const PORT = 8080;
const { MongoClient, ServerApiVersion} = require('mongodb');

//Importing the routes, thereby getting all APIs mapped
const userRoutes = require('./routes/userRoutes');
const characterRoutes = require('./routes/characterRoutes');

//configuring mongoDB
const uri = "";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1;
        strict: true;
        depreciationErrors: true;
    }
});


//Middleware for parsing JSON requests
app.use(express.json());

app.use('/users', userRoutes);
app.use('/characters', characterRoutes);

app.listen(PORT, () => {
    console.log('Listening on port : ' + PORT);
});

