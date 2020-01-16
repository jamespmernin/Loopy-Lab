const { multiplicationTable } = require('../loop');

describe('multiplicationTable', () => {
  let mock;
  beforeEach(() => {
    console.log = jest.fn();
    multiplicationTable();
    mock = console.log.mock;
  });

  test('it should log the 1s table', () => {
    expect(mock.calls[0][0]).toContain("1 X 1 is 1");
    expect(mock.calls[9][0]).toContain("1 X 10 is 10");
  });

  test('it should log the 6s table', () => {
    expect(mock.calls[52][0]).toContain("6 X 3 is 18");
  });

  test('it should log the 10s table', () => {
    expect(mock.calls[92][0]).toContain("10 X 3");
  });

  test('it should log 100 times', () => {
    expect(mock.calls.length).toBe(100);
  });
});
