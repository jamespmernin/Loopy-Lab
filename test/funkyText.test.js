const { funkyText } = require('../loop');

describe('funkyText', () => {
  test('it should handle a small word', () => {
    expect(funkyText("cat")).toBe("cAt");
  });

  test('it handles spaces', () => {
    expect(funkyText("where is my fanny pack")).toBe("wHeRe iS My fAnNy pAcK");
  });

  test('it should handle other chars', () => {
    expect(funkyText("it's me")).toBe("iT'S Me");
  });
});
