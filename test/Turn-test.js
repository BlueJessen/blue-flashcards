const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', () => {
  it('should be a function', () => {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should store user answer', () => {
    const card = new Card(1,'Example?',['example','Example'], 'Example');
    const turn = new Turn('Example', card);

    expect(turn.userGuess).to.equal('Example');
  });

  it('should store the current card', () => {
    const card = new Card(1,'Example?',['example','Example'], 'Example');
    const turn = new Turn('Example', card);

    expect(turn.card).to.deep.equal(card);
  });

  it('should have a returnGuess function', () => {
    const card = new Card(1,'Example?',['example','Example'], 'Example');
    const turn = new Turn('Example', card);

    expect(turn.returnGuess()).to.equal('Example');
  });

  it('should have a returnCard function', () => {
    const card = new Card(1,'Example?',['example','Example'], 'Example');
    const turn = new Turn('Example', card);

    expect(turn.returnCard()).to.deep.equal(card);
  });

  it('should have a evaluateGuess function', () => {
    const card = new Card(1,'Example?',['example','Example'], 'Example');
    const turn = new Turn('Example', card);

    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('evaluateGuess should test if user guess is correct', () => {
    const card = new Card(1,'Example?',['example','Example'], 'Example');
    const turn = new Turn('example', card);

    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should have a giveFeedback function', () => {
    const card = new Card(1,'Example?',['example','Example'], 'Example');
    const turn = new Turn('Example', card);
    const nextCard = new Card(2,'Test?',['Test','test'], 'test');
    const nextTurn = new Turn('Test', nextCard);

    expect(turn.giveFeedback()).to.equal('correct!');
    expect(nextTurn.giveFeedback(nextTurn.evaluateGuess())).to.equal('incorrect!');
  });
})
