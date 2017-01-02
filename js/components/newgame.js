const React = require('react');
const { connect } = require('react-redux');
const actions = require('../actions/index');

class NewGame extends React.Component {

    render() {
        return(
        <div>
        <button onClick={this.props.onClick}>New Game</button>
        </div>
        )
    }
}

module.exports = NewGame;