function firstTenNums() {
  // firstTenNums should `console.log()` the numbers
  // from 1 - 10.  Use a `for` loop.
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

function manyEvens() {
  // Return an array that contains all the even numbers between 1 and 100 (inclusive).
  // Use a for loop.
  let q2 = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      q2.push(i);
    }
  }
  return q2;
}

function manyOdds() {
  // Return an array that contains all the odd numbers between 3 and 103 (inclusive).
  // Use a while loop.
  let q3 = [];
  for (let i = 3; i <= 103; i++) {
    if (i % 2 === 1) {
      q3.push(i);
    }
  }
  return q3;
}

function arraySum(nums) {
  // arraySum(nums) receives an array of numbers as an argument
  // and should return the sum of all the numbers.
  // For example,
  // arraySum([1, 2]) => 3
  // arraySum([3, 4, 5, 6]) => 18
  // Use a loop of your choice
  let q4 = 0;
  for (let i = 0; i < nums.length; i++) {
    q4 += nums[i];
  }
  return q4;
}

function sumToN(n) {
  // Return the sum of all numbers from 1 to n.
  let q5 = 0;
  for (let i = 1; i <= n; i++) {
    q5 += i;
  }
  return q5;
}

function countDown(n) {
  // Return an array of all numbers with n at index 0 and 1 at the last index.
  let q6 = [];
  for (let i = n; i >= 1; i--) {
    q6.push(i);
  }
  return q6;
}

function factorial(n) {
  // compute the factorial of n. See https://en.wikipedia.org/wiki/Factorial.
  let q7 = 1;
  for (let i = 1; i <= n; i++) {
    q7 *= i;
  }
  return q7;
}

function leastCommonMult(a, b) {
  // Bonus question:
  // Find the least common multiple of two inputted numbers.
  // See: https://en.wikipedia.org/wiki/Least_common_multiple

  // found a series of functions to calculate the lcm
  // source: https://www.w3resource.com/javascript-exercises/javascript-math-exercise-10.php
  return lcm_two_numbers(a, b)
}

function lcm_two_numbers(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number')) // checks to make sure inputs are both numbers
    return false;
  return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
}

function gcd_two_numbers(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
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
  // code modified from source: https://oamatech.com/how-to-use-touppercase-in-javascript/
  // changes had to be made because the original code ignored spaces while this function is not
  // supposed to ignore spaces
  let b2 = "";

  for (let i = 0; i < text.length; i++) {
    let letter = text.charAt(i);
    if (i % 2 === 1) {
      b2 += letter.toUpperCase();
    } else {
      b2 += letter;
    }
  }
  return b2;
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
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} X ${j} is ${i * j}`)
    }
  }
}

function fib(n) {
  // Bonus question:
  // Find the nth number of the Fibonacci sequence.
  // See https://en.wikipedia.org/wiki/Fibonacci_number.
  // modifed from: https://www.geeksforgeeks.org/fibonacci-series-program-in-javascript/
  let f1 = 0;
  let b4 = 1;
  let z;
  for (let i = 2; i < n; i++) {
    z = f1 + b4;
    f1 = b4;
    b4 = z;
  }
  return b4;
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
  const people = ["Eric", "Jay-Z", "John", "Jason", "Ryan", "Micky"];

  const activities = [
    "went on a bike ride",
    "played badminton",
    "hailed a taxi",
    "is visiting the Met",
    "is going to the deli to nosh",
  ];
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
  fib,
};
