const { leastCommonMult } = require('../loop')

describe('leastCommonMult', () => {
  test('it should return 13 for inputs of 1 and 13.', () => {
    const expected = leastCommonMult(1, 13)
    const actual = 13
    expect(expected).toEqual(actual)
  })

  test('it should return 12 for inputs of 3 and 4.', () => {
    const expected = leastCommonMult(3, 4)
    const actual = 12
    expect(expected).toEqual(actual)
  })

  test('it should return 90 for inputs of 30 and 45.', () => {
    const expected = leastCommonMult(30, 45)
    const actual = 90
    expect(expected).toEqual(actual)
  })
})
