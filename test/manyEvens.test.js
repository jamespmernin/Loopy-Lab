const { manyEvens } = require('../loop');

describe('manyEvens', () => {
  const value = manyEvens();
  test('it returns an array.', () => {
    expect(Array.isArray(value)).toBeTruthy();
    });
    test('returned array returns 2, 4, 24 and 38', () => {
      expect(value).toContainEqual(2, 4, 24, 38);
    });
    test('returned array does not contain 3, 9, 13 or 99', () => {
      expect(value).not.toContainEqual(3, 9, 13, 99);
    });
    test('returned array has a length of 50', () => {
      expect(value).toHaveLength(50);
    });
});
