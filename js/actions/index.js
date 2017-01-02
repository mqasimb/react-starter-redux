var fetch = require('isomorphic-fetch');

var ASK_FOR_HELP = 'ASK_FOR_HELP';
var askForHelp = function() {
    return {
        type: ASK_FOR_HELP
    }
}

var CLOSE_HELP = 'CLOSE_HELP';
var closeHelp = function() {
    return {
        type: CLOSE_HELP
    }
}

var GENERATE_NEW_RANDOM_NUMBER = 'GENERATE_NEW_RANDOM_NUMBER';
var generateNewNumber = function() {
    return {
        type: GENERATE_NEW_RANDOM_NUMBER
    }
}

var TYPE_A_NUMBER = 'TYPE_A_NUMBER';
var typeANumber = function(number) {
    return {
        type: TYPE_A_NUMBER,
        number: number
    }
}

var SUBMIT_A_NUMBER = 'SUBMIT_A_NUMBER';
var submitANumber = function(number) {
    return {
        type: SUBMIT_A_NUMBER,
        number: number
    }
}

var START_NEW_GAME = 'START_NEW_GAME';
var startNewGame = function() {
    return {
        type: START_NEW_GAME
    }
}

var FETCH_GUESSES_SUCCESS = 'FETCH_GUESSES_SUCCESS';
var fetchGuessesSuccess = function(fewestGuesses) {
    return {
        type: FETCH_GUESSES_SUCCESS,
        fewestGuesses: fewestGuesses,
    };
};

var FETCH_GUESSES_ERROR= 'FETCH_DESCRIPTION_ERROR';
var fetchGuessesError = function(error) {
    return {
        type: FETCH_GUESSES_ERROR,
        error: error
    };
};

var fetchFewestGuesses = function() {
    return function(dispatch) {
        var url = 'https://quiz-app-bqasim381.c9users.io/fewest-guesses';
        return fetch(url).then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return response;
        })
        .then(function(response) {
            console.log(response);
            return response.json();
        })
        .then(function(data) {
            return dispatch(
                fetchGuessesSuccess(data.fewestGuesses)
            );
        })
        .catch(function(error) {
            return dispatch(
                fetchGuessesError(error)
            );
        });
    }
}

var saveFewestGuesses = function(fewestGuesses) {
    return function(dispatch) {
        var url = 'https://quiz-app-bqasim381.c9users.io/fewest-guesses';
        return fetch(url, {
            method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                fewestGuesses: fewestGuesses
              })
        }).then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            return dispatch(
                fetchGuessesSuccess(fewestGuesses)
            );
        })
        .catch(function(error) {
            return dispatch(
                fetchGuessesError(fewestGuesses, error)
            );
        });
    }
}

exports.fetchFewestGuesses = fetchFewestGuesses;

exports.FETCH_GUESSES_SUCCESS = FETCH_GUESSES_SUCCESS;
exports.FETCH_GUESSES_ERROR = FETCH_GUESSES_ERROR;
exports.saveFewestGuesses = saveFewestGuesses;

exports.ASK_FOR_HELP = ASK_FOR_HELP;
exports.askForHelp = askForHelp;
exports.GENERATE_NEW_RANDOM_NUMBER = GENERATE_NEW_RANDOM_NUMBER;
exports.generateNewNumber = generateNewNumber;
exports.TYPE_A_NUMBER = TYPE_A_NUMBER;
exports.typeANumber = typeANumber;
exports.SUBMIT_A_NUMBER = SUBMIT_A_NUMBER;
exports.submitANumber = submitANumber;
exports.START_NEW_GAME = START_NEW_GAME;
exports.startNewGame = startNewGame; 