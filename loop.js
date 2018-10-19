function manyEvens() {
  // Return an array that contains all the even numbers between 1 and 100.
  // Use a for loop.
}

function manyOdds() {
  // Return an array that contains all the odd numbers between 3 and 103.
  // Use a while loop.
}

function sumToN(n) {
  //Return the sum of all numbers from 1 to n.
}

function countDown(n) {
  //Return an array of all numbers with n at index 0 and 1 at the last index.
}

function factorial(n) {
  //compute the factorial of n. See https://en.wikipedia.org/wiki/Factorial.
  let result = 1;
  for(let i = 1; i <= n; i =+ 1) {
    result *= i;
  }
  return result;
}

function leastCommonMult(a,b) {
  //Bonus question:
  //Find the least common multiple of two inputted numbers.
  //See: https://en.wikipedia.org/wiki/Least_common_multiple
}

function fib(n) {
  //Bonus question:
  //Find the nth number of the Fibonacci sequence.
  //See https://en.wikipedia.org/wiki/Fibonacci_number.
}

module.exports =  {
  manyOdds,
  manyEvens,
  factorial,
  sumToN,
  leastCommonMult,
  fib,
  countDown
};
