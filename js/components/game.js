const React = require('react');
const { connect } = require('react-redux');
const Guesses = require('./guesses');
const Results = require('./results');
const Counter = require('./counter');
const Input = require('./input');
const actions = require('../actions/index')

class Game extends React.Component {
    componentDidMount() {
        this.props.dispatch(actions.fetchFewestGuesses());
    }
    render() {
        return (
            <div className="main-game">
            <Input />
            {this.props.fewestGuesses}
            </div>
            )
    }
}

function mapStateToProps(state, props) {
    return ({
        game: state,
        fewestGuesses: state.fewestGuesses
    })
}

var Container = connect(mapStateToProps)(Game);

module.exports = Container;