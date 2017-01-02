var redux = require("redux");
var createStore = redux.createStore;
var applyMiddleware = redux.applyMiddleware;
var thunk = require('redux-thunk').default;
var helperReducer = require('./reducers/index');

var store = createStore(helperReducer, applyMiddleware(thunk));

module.exports = store;