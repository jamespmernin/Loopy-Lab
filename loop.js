function manyEvens() {
  // return an array that contains all the even numbers between 1 and 100
  // use a for loop
  const evenArr = [];
  for(let i = 1; i <= 100; i += 1) {
    if(i % 2 === 0) {
      evenArr.push(i);
    }
  }
  return evenArr;
}

function manyOdds() {
  // return an array that contains all the odd numbers between 3 and 103.
  // use a while loop
  const oddArr = [];
  let i = 3;
  while(i <= 103) {
    if(i % 2 !== 0) {
      oddArr.push(i);
    }
   i += 1;
  }
  return oddArr;
}

function sumToN(n) {
  //return the sum of all numbers from 1 to n.
  let total = 0;
  for (let i = 1; i <= n; i += 1) {
    total += i;
  }
  return total;
}

function countDown(n) {
  //return an array of all numbers with n at index 0 and 1 at the last index.
  if (typeof n !== 'number') {
    throw new Error('Please provide a number.');
  }
  const arr = [];
  for(let i = n; i >= 1; i -= 1) {
    arr.push(i);
  }
  return arr;
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
  const max = a > b ? a : b;
  let ans;
  for (let i = max; i <= a * b; i += max) {
    if(i % a === 0 && i % b === 0 && i !== b && i !== a) {
      ans = i;
      break;
    }
  }
  return ans;
}

function fib(n) {
  let last = 1;
  let second = 1;
  if (n === 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  } else if (n === 3) {
    return 1;
  }
  for (let i = 3; i < n; i++ ) {
    let sum = last + second;
    second = last;
    last = sum;
  }
  return last;
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
