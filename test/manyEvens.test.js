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

    test('returns the correct numbers', () => {
      const expected = [ 2,  4,  6,  8,  10,  12,  14,  16,  18,  20,  22,  24,  26,  28,  30,  32,  34,  36,  38,  40,  42,  44,  46,  48,  50,  52,  54,  56,  58,  60,  62,  64,  66,  68,  70,  72,  74,  76,  78,  80,  82,  84,  86,  88,  90,  92,  94,  96,  98,  100 ];
      expect(value).toEqual(expected);
    });
});
