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
  console.log('')
  for (let i = n; n >= 1; n -= 1) {
    console.log(i);
  }
}

function countDown(n) {
}

function factorial(n) {
}

function leastCommonMult(a, b) {
}

function fib(n) {
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
