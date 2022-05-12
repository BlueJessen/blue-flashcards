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
    expect(game.start());
  })

  it('start should create new round with deck', () => {
    const game = new Game();
    game.start();
    expect(game.currentRound).to.be.an.instanceof(Round);
  })

  it('start should keep track of current Round', () => {
    const game = new Game();
    game.start();
    expect(game.currentRound).to.be.instanceof(Round);
  })

})
