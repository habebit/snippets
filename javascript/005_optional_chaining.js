// JavaScript
// Topic: map (array function)

// TRY TO AVOID ❌
function foo(a) {
  return a.x;
}

// BETTER ✅
function bar(a) {
  return a?.x;
}

const param = [1,2,3,4,5,6];
console.log(foo(param));