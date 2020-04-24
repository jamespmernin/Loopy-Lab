function firstTenNums() {
  // firstTenNums should `console.log()` the numbers
  // from 1 - 10.  Use a `for` loop.
}

function manyEvens() {
  // Return an array that contains all the even numbers between 1 and 100 (inclusive).
  // Use a for loop.
}

function manyOdds() {
  // Return an array that contains all the odd numbers between 3 and 103 (inclusive).
  // Use a while loop.
}

function arraySum(nums) {
  // arraySum(nums) receives an array of numbers as an argument
  // and should return the sum of all the numbers.
  // For example,
  // arraySum([1, 2]) => 3
  // arraySum([3, 4, 5, 6]) => 18
  // Use a loop of your choice
}

function sumToN(n) {
  // Return the sum of all numbers from 1 to n.
}

function countDown(n) {
  // Return an array of all numbers with n at index 0 and 1 at the last index.
}

function factorial(n) {
  // compute the factorial of n. See https://en.wikipedia.org/wiki/Factorial.
}

function leastCommonMult(a, b) {
  // Bonus question:
  // Find the least common multiple of two inputted numbers.
  // See: https://en.wikipedia.org/wiki/Least_common_multiple
}

function funkyText(text) {
  /*
   * Bonus question :
   * funkyText(text) should return a modified version of `text` which
   * is passed as an argument.  The modified string should have every other
   * letter capitalized, starting with the second character.
   *
   * For example, "wallet" should be transformed into "wAlLeT"; "cat" => "cAt"
   * Use a loop of your choice.
   * Recall that you can concatenate two strings
   * together using "string".concat("otherString")
   * Alternatively, Array.split() and Array.join() might be useful
   */
}

function multiplicationTable() {
  /*
   * Bonus question :
   * multiplicationTable() should console.log() out a multiplication
   * table ( or "times table" ) up to 10 in the format of "a X b is c".
   * First, it should console.log() "1 X 1 is 1"; next, "1 X 2 is 2"
   * until "1 X 10 is 10", then the following log should be "2 X 1 is 2" and so forth
   * This one is a bit harder.  You will need to use a nested loop.
   */
}

function activityLog() {
  /*
   * Bonus question :
   * activityLog() should `console.log()` that each
   * person is doing each activity in order.  For example,
   * first, log "Eric went on a bike ride", then "Eric
   * played badminton"...  After logging "Eric is going to the deli...", do the same for each activity.
   * This task also requires a nested loop
   */
  const people = ['Eric', 'Jay-Z', 'John', 'Jason', 'Ryan', 'Micky']

  const activities = [
    'went on a bike ride',
    'played badminton',
    'hailed a taxi',
    'is visiting the Met',
    'is going to the deli to nosh'
  ]
}

function fib(n) {
  // Bonus question:
  // Find the nth number of the Fibonacci sequence.d
  // See https://en.wikipedia.org/wiki/Fibonacci_number.
}

module.exports = {
  firstTenNums,
  manyEvens,
  manyOdds,
  arraySum,
  sumToN,
  countDown,
  factorial,
  leastCommonMult,
  funkyText,
  multiplicationTable,
  activityLog,
  fib
}
