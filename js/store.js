var redux = require("redux");
var createStore = redux.createStore;

var helperReducer = require('./reducers/index');

var store = createStore(helperReducer);

module.exports = store;