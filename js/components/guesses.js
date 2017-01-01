const React = require('react');
const { connect } = require('react-redux');

class Guesses extends React.Component {
    
    render(props) {
        console.log(props);
        var listOfGuesses = this.props.currentGuesses.map(guess =>
            <li>guess</li>
        )
        console.log(listOfGuesses);
        console.log(this.props.currentGuesses);
        return (
            <div className="guesses">
            {listOfGuesses}
            </div>
            )
    }
}

module.exports = Guesses;