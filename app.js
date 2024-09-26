const app = require('express')();
const PORT = 8080;

app.listen(PORT, () => {
    console.log('Listening on port : ' + PORT);
});

app.get('/test', (request, response) => {
    response.status(200).send({
        "name":"darco",
        "class":"Warlock"

    })

});
