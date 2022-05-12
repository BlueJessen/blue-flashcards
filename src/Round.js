const Turn = require('../src/Turn');
class Round {
  constructor(deck){
    this.deck = deck;
    this.turnCount = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turnCount];
  }

  takeTurn(guess) {
    const result = new Turn(guess, this.returnCurrentCard());
    if (!result.evaluateGuess()) {
      this.incorrectGuesses.push(result.card.id);
      }
    this.turnCount++;
    this.returnCurrentCard();
    return result.giveFeedback();
  }

  calculatePercentCorrect() {
    let result = ((this.deck.cards.length - this.incorrectGuesses.length)/(this.deck.cards.length))*100;
    result = Math.trunc(result);
    return result;
  }

  endRound() {
    let result = this.calculatePercentCorrect();
    console.log(`** Round over! ** You answered ${result}% of the questions correctly!`);
  }
}

module.exports = Round;
