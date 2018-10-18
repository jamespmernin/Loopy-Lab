const { manyOdds } = require('../loop');

describe('manyOdds', () => {
  const value = manyOdds();
  test('it returns an array.', () => {
      expect(Array.isArray(value)).toBeTruthy();
    });

    test('returned array returns 3, 5, 25 and 39', () => {
      expect(value).toContainEqual(3, 5, 25, 39);
    });

    test('returned array does not contain 2, 4, 24 or 38', () => {
      expect(value).not.toContainEqual(2, 4, 24, 38);
    });
    
    test('returned array has a length of 51', () => {
      expect(value).toHaveLength(51);
    });
});
