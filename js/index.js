require('babel-polyfill');
const React = require('react');
const ReactDOM = require('react-dom');

const Game = require('./components/game');
const { Provider } = require('react-redux');

const store = require('./store');

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Provider store={store}>
    <Game />
    </ Provider>, document.getElementById('app'));
});