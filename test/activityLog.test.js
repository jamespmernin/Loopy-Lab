const { activityLog } = require('../loop');

describe('activityLog', () => {
  let mock;
  beforeEach(() => {
    console.log = jest.fn();
    activityLog();
    mock = console.log.mock;
  });

  test('it should log that Eric went on a bike ride', () => {
    expect(mock.calls[0][0]).toContain('Eric');
    expect(mock.calls[0][0]).toContain('went on a bike ride');
  });

  test('it should log that Eric is going to the deli', () => {
    expect(mock.calls[4][0]).toContain('going to the deli');
  });

  test('it should log that Jason hailed a taxi', () => {
    expect(mock.calls[17][0]).toContain('Jason hailed a taxi');
  });

  test('it should log that Micky is going to the deli', () => {
    expect(mock.calls[mock.calls.length - 1][0]).toContain('Micky is going to the deli');
  });

  test('it should call console.log 30 times', () => {
    expect(mock.calls.length).toBe(30);
  });
});
