// JavaScript
// Topic: if (nullish)

// TRY TO AVOID ❌
function foo(a, b) {
  if (
    a === undefined || 
    a === null ||
    a === false ||
    a === 0
  ) {
    return 'not good';
  }
}

// BETTER ✅
function bar(a, b) {
  if (!a) {
    return 'not good';
  }
}

const params = undefined;
console.log(foo(params));
console.log(bar(params));