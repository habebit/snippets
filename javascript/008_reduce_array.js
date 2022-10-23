// JavaScript
// Topic: reduce (array function)

// TRY TO AVOID ❌
function foo(a) {
  let sum = 0;
  for (let x of a) {
    sum += x;
  }
  return sum;
}

// BETTER ✅
function bar(a) {
  return a.reduce((acc, x) => acc += x, 0);
}

const param = [1,2,3,4,5,6];
console.log(foo(param));
console.log(bar(param));