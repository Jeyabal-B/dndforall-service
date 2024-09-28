const express = require('express')
const app = express();

app.use(express.json());

const users = [{id: 101, name: "Jey"}];

app.get('/users/getAll', (request, response) => {
    response.send(users)
})

app.get('/users/:id', (request, response) => {
    const user = users.find(u => u.id == parserInt(request.params.id))
    if(!user) return response.status(404).send("User does not exist")
    response.send(user);
})