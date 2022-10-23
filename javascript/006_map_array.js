// JavaScript
// Topic: map (array function)

// TRY TO AVOID ❌
function foo(a) {
  const result = [];
  for (let x of a) {
    result.push(x+1);
  }
  return result;
}

// BETTER ✅
function bar(a) {
  return a.map(x => x+1);
}

const param = [1,2,3,4,5,6];
console.log(foo(param));
console.log(bar(param));