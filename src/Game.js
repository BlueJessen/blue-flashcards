const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = null;
  }

  start() {
    const cardArray = prototypeQuestions.map((object) => {
      const card = new Card(object['id'], object['question'], object['answers'], object['correctAnswer']);
      return card;
    });
    const deck = new Deck(cardArray);
    const round = new Round(deck);
    this.currentRound = round;
    this.printMessage(deck, round);
    this.printQuestion(round);
}

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.cardAmount} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

}

module.exports = Game;
