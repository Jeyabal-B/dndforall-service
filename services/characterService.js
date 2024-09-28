const express = require('express')
const app = express();


app.use(express.json());

const characters = [{id: 1001, name: "Darco", class: "Warlock"}];

app.get('/characters/getAll', (request, response) => {
    response.send(users);
})

app.get('/characters/:id', (request, response) => {
    const user = users.find(u => u.id == parserInt(request.params.id))
    if(!user) return response.status(404).send("Character does not exist")
    response.send(user);
})