const React = require('react');
const { connect } = require('react-redux');
const actions = require('../actions/index');
const Guesses = require('./guesses');

class Input extends React.Component {
    updateInput(event) {
        this.props.dispatch(actions.typeANumber(event.target.value));
    }
    
    addNewGuess(event) {
        event.preventDefault();
        this.props.dispatch(actions.submitANumber(this.props.currentNumber));
        console.log(this.props.game)
    }

    render() {
        var listOfGuesses = this.props.currentGuesses.map((guess,index) =>
            <li key={index} id={index}>{guess}</li>
        )
        return (
        <div>
        <form onSubmit={this.addNewGuess.bind(this)}>
        <input onChange={this.updateInput.bind(this)}/>
        <button>Guess</button>
        </form>
        <div>
        <div>
        {this.props.status}
        </div>
        Previous Guesses
        {listOfGuesses}
        </div>
        </div>
        )
    }
}

function mapStateToProps(state, props) {
    return ({
        currentNumber: state.currentNumber,
        game: state,
        currentGuesses: state.currentGuesses,
        status: state.hotorcold,
        correct: state.correct
    })
}

var Container = connect(mapStateToProps)(Input);

module.exports = Container;