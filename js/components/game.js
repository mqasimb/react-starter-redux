const React = require('react');
const { connect } = require('react-redux');
const Guesses = require('./guesses');
const Results = require('./results');
const Counter = require('./counter');
const Input = require('./input');
const NewGame = require('./newgame');
const actions = require('../actions/index')

class Game extends React.Component {
    componentDidMount() {
        this.props.dispatch(actions.fetchFewestGuesses());
    }
    
    startNewGame() {
        this.props.dispatch(actions.fetchFewestGuesses());
        this.props.dispatch(actions.startNewGame());
    }
    render() {
        return (
            <div className="main-game">
            <Input />
            Fewest Guesses: {this.props.fewestGuesses}
            <NewGame onClick={this.startNewGame.bind(this)} />
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