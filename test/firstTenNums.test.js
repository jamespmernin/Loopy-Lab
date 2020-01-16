const { firstTenNums } = require('../loop');

describe('firstTenNums', () => {
  let mock;
  beforeEach(() => {
    console.log = jest.fn();
    mock = console.log.mock;
    firstTenNums();
  });

  test('it logs the number 1', () => {
    const mock = console.log.mock;
    expect(mock.calls[0][0]).toBe(1);
  });

  test('it logs the number 10', () => {
    expect(mock.calls[9][0]).toBe(10);
  });

  test('it should log 10 times', () => {
    expect(mock.calls.length).toBe(10);
  });
});
