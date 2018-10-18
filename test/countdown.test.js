const { countDown } = require('../loop');

describe('countDown', () => {
    test('it returns an array of n down to 1', () => {
      const actual = [2,1];
      const expected = countDown(2);
      expect(expected).toEqual(actual);
    });
    // test('if n in not a number, an error is thrown.', () => {
    //   const expected = 'Please provide a number.';
    //   let wasErrorThrown = false;
    //   try {
    //     countDown('Drake');
    //   } catch(err) {
    //     wasErrorThrown = true;
    //     expect(err.message).toBe(expected);
    //   } finally {
    //     expect(wasErrorThrown).toBe(true);
    //   }
    // });
});
