// JavaScript
// Topic: filter (array function)

// TRY TO AVOID ❌
function foo(a) {
  const result = [];
  for (let x of a) {
    if (x > 3) {
      result.push(x);
    }
  }
  return result;
}

// BETTER ✅
function bar(a) {
  return a.filter(x => x > 3);
}

const param = [1,2,3,4,5,6];
console.log(foo(param));
console.log(bar(param));