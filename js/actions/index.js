//Ask For Help
//Guess A Number
//Type A Number
//Submit A Number
//Start A New Game
//Generate a new random number

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