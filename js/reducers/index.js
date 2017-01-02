const react = require('react');
const actions = require('../actions/index');

var initialState = {
        randomNumber: Math.floor(Math.random()*100),
        helper: false,
        currentNumber: -1,
        hotorcold: '',
        correct: false,
        counter: 0,
        currentGuesses: [],
        fewestGuesses: null
    };

var helperReducer = function(state, action) {
    state = state || initialState;
    
    var newState = Object.assign({}, state);
    
    if(action.type === actions.ASK_FOR_HELP) {
        newState.helper = true;
        return newState;
    }
    
    if(action.type === actions.TYPE_A_NUMBER) {
        newState.currentNumber = action.number;
        return newState;
    }
    
    if(action.type === actions.CLOSE_HELP) {
        newState.helper = false;
        return newState;
    }
    
    if(action.type === actions.SUBMIT_A_NUMBER) {
        //Also check for duplicates)
        newState.counter++;
        newState.currentGuesses.push(newState.currentNumber);
        if(newState.currentNumber == newState.randomNumber) {
            newState.hotorcold = 'Correct';
            newState.correct = true;
        }
        else if(Math.abs(newState.randomNumber - newState.currentNumber) <= 10) {
                newState.hotorcold = 'Hot';
            }
        else {
                newState.hotorcold = 'Cold';
            }
        return newState;
    }
    
    if(action.type === actions.GENERATE_NEW_RANDOM_NUMBER) {
        newState.randomNumber = Math.floor(Math.random()*100)
        return newState;
    }
    
    if(action.type === actions.START_NEW_GAME) {
        return initialState;
    }
    
    if(action.type === actions.FETCH_GUESSES_SUCCESS) {
        newState.fewestGuesses = action.fewestGuesses;
        return newState;
    }
    
    return state;
}

module.exports = helperReducer;