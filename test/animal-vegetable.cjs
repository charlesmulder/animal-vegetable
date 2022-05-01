var assert = require('assert');

//import { Animal } from '../dist/animal-vegetable.min.mjs';
const Animal = require("../dist/animal-vegetable.cjs").Animal;

describe('Animal', () => {

  describe('say()', () => {

    it('should return object with quote, author and offensiveness', () => {
      Animal.say();
    });

    describe('max offensiveness', () => {
      it('should return object with offensiveness less than or equal to max', () => {
        const max = 1;
        assert.ok(  Animal.say(null, max).offensiveness <= max );
      });
    });

    describe('min offensiveness', () => {
      it('should return object with offensiveness greater than or equal to min', () => {
        const min = 2;
        assert.ok(  Animal.say(min).offensiveness >= min );
      });
    });

    describe('min and max offensiveness', () => {
      it('should return object with offensiveness greater than or equal to min and less than or equal to max', () => {
        const min = 2;
        const max = 2;
        const offensiveness = Animal.say(min, max).offensiveness;
        assert.ok(  offensiveness >= min && offensiveness <= max );
      });
    });

  });


});

