function manyEvens() {
  // print all the even numbers between 1 and 100
  // use a for loop
  for (let i = 2; i < 101; i += 2) {
    console.log(i);
  }
}

function manyOdds() {
  // use a while loop
  for (let i = 3;i < 104; i += 2) {
    console.log(i);
  }
}

function sumToN(n) {
  let sum = 0;
  for (let i = 1;i <= n; i++) {
    sum += i;
  }

  return sum;
}

function countDown(n) {
  for (let i = n; i > 0; i--) {
    console.log(i);
  }
}

function factorial(n) {
  let fac = 1;
  while (n > 0) {
    fac = fac * n;
    n--;
  }
  return fac;
}

function leastCommonMult(a, b) {
  const max = a > b ? a : b;
  let ans;
  for (let i = max; i <= a * b; i += max) {
    if (i % a === 0 && i % b === 0 && i !== b && i !== a) {
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

export {
  manyOdds,
  manyEvens,
  factorial,
  sumToN,
  leastCommonMult,
  fib,
  countDown
};

