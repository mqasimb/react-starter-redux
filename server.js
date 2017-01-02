var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var STORAGE = {
    fewestGuesses: 100
}

app.use(bodyParser.json());

app.use(express.static('build'));


app.get('/fewest-guesses', function(req, res) {
    res.json(STORAGE);
});

app.post('/fewest-guesses', function(req, res) {
    if(STORAGE.fewestGuesses > req.body.fewestGuesses) {
        STORAGE.fewestGuesses = req.body.fewestGuesses;
    }
    res.status(201).json(STORAGE);
});

app.listen(process.env.PORT || 8080, process.env.IP);