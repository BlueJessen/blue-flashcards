const Card = require('../src/Card');
class Turn {
  constructor(guess, card) {
    this.userGuess = guess;
    this.card = card;
  }

  returnGuess() {
    return this.userGuess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
  return (this.userGuess === this.card.correctAnswer) ?  true : false;
  }

  giveFeedback() {
    return (this.evaluateGuess()) ? 'correct!' : 'incorrect!';
    }
}

module.exports = Turn;
