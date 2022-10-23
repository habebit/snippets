// JavaScript
// Topic: ternary operator --> ? :

// TRY TO AVOID ❌
function foo(a, b) {
  if (a > b) {
    return 'ok';
  } else {
    return 'not ok';
  }
}

// BETTER ✅
function bar(a, b) {
  return a > b
    ? 'ok'
    : 'not ok';
}

console.log(foo(8, 5));
console.log(bar(8, 5));