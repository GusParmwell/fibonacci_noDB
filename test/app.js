const expect = require('chai').expect;
const application = require('../app');

describe('IBM Problem Solution', () => {
  describe('Fibonacci sequence', () => {
    it('returns four numbers of fibonacci sequence starting at position taken as parameter', () => {
      const First = application.Fibonacci(1);
      const Second = application.Fibonacci(2);
      const Third = application.Fibonacci(3);

      expect(First).to.equal([1, 1, 2, 3]);
      expect(Second).to.equal([1, 2, 3, 5]);
      expect(Third).to.equal([2, 3, 5, 8]);
    });
  });

  describe('Prime numbers', () => {
    it('returns all prime numbers smaller than or equal to input parameter', () => {
      const First = application.Primes(1);
      const Second = application.Primes(2);
      const Third = application.Primes(3);

      expect(First).to.equal([]);
      expect(Second).to.equal([2]);
      expect(Third).to.equal([2, 3]);
    });
  });

  describe('Deconstruction', () => {
    it('deconstructs parameter using primes and returns sum of calculated multiplicands', () => {
      const First = application.Deconstruct(3);
      const Second = application.Deconstruct(5);
      const Third = application.Deconstruct(8);

      expect(First).to.equal(3);
      expect(Second).to.equal(11);
      expect(Third).to.equal(49);
    });
  });
});
