const { arraySum } = require('../loop');

describe('arraySum', () => {
  test('it should sum 2 numbers', () => {
    expect(arraySum([1, 2])).toBe(3);
  });
  
  test('it should sum 1 number', () => {
    expect(arraySum([5])).toBe(5);
  });

  test('it should sum 5 nums', () => {
    expect((arraySum([4, 5, 10, 2, 9]))).toBe(30);
  });
});
