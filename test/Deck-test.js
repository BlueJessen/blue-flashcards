const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

describe('Deck', () => {

it('should be a function', () => {
  const deck = new Deck(['card','card','card']);
  expect(Deck).to.be.a('function');
})

it('should be able to store cards', () => {
  const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

  const deck = new Deck([card1,card2,card3]);

  expect(deck.cards).to.deep.equal([card1,card2,card3]);
})

it('should know how many cards it holds', () =>{
  const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

  const deck = new Deck([card1,card2,card3]);

  expect(deck.cardAmount).to.equal(3);
})
})
