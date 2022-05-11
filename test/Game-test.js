const chai = require('chai');
const expect = chai.expect;

const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
const util = require('../src/util');

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', () => {

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  })

  it('should have a start function that initializes the game', () => {
    const game = new Game();
    expect(game.start()).to.be.a('function');
  })

  it('start should keep track of current Round', () => {
    const game = new Game();
    expect(game.currentRound).to.be.a('property');
  })

  it('start should create cards from data file', () => {
    const game = new Game();
    let card = new Card(2, "What is a comma-separated list of related values?",["array", "object", "function"],"array");
    let cardArray = game.start();
    expect(cardArray[1]).to.deep.equal(card)
  })

  it('start should put cards in deck', () => {
    const game = new Game();
    let deck = game.start();
    expect(deck).to.be.an.instanceof(Deck);
  })

  it('start should create new round with deck', () => {
    const game = new Game();
    game.start();
    expect(game.currentRound).to.be.an.instanceof(Round);
  })

})
