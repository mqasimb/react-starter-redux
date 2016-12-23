const react = require('react');
const actions = require('../actions/index');

var initialState = {
        randomNumber: Math.floor(Math.random()*100),
        helper: false,
        currentNumber: '',
        hotorcold: '',
        correct: false
    };

var helperReducer = function(state, action) {
    state = state || initialState;
    var newState = state;
    
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
        if(parseInt(state.currentNumber) === state.randomNumber) {
            newState.correct = true;
        }
        else if(Math.abs(state.randomNumber - parseInt(state.currentNumber)) <= 10) {
                newState.hotorcold = 'hot';
            }
        else {
                newState.hotorcold = 'cold';
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
    
    return state;
}

module.exports = helperReducer;