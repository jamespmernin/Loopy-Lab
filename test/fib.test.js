const { fib } = require('../loop');

describe('fib', () => {
  test('it finds the third number in the fib sequence.', () => {
    const expected = fib(3);
    const actual = 1;
    expect(expected).toEqual(actual);
  });

  test('it finds the thirteenth number in the fib sequence.', () => {
    const expected = fib(13);
    const actual = 144;
    expect(expected).toEqual(actual);
  });

  test('it finds the seventh number in the fib sequence.', () => {
    const expected = fib(7);
    const actual = 8;
    expect(expected).toEqual(actual);
  });
});
