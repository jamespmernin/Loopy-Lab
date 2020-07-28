const { sumToN } = require("../loop");

describe("sumToN", () => {
  test("it returns a number.", () => {
    const value = sumToN(2);
    expect(typeof value).toBe("number");
  });

  it("it sums all numbers from 1 to input.", () => {
    const value = sumToN(2);
    expect(value).toEqual(3);
  });
});
