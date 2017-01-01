var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var STORAGE = {
    fewestGuesses: 10
}

app.use(bodyParser.json());


app.get('/fewest-guesses', function(req, res) {
    res.json(STORAGE.fewestGuesses);
});

app.post('/fewest-guesses', function(req, res) {
    if(STORAGE.fewestGuesses > req.body.fewestGuesses) {
        STORAGE.fewestGuesses = req.body.fewestGuesses;
    }
    res.status(201);
});

app.listen(process.env.PORT || 8080, process.env.IP);