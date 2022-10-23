// JavaScript
// Topic: return boolean

// TRY TO AVOID ❌
function foo(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

// BETTER ✅
function bar(a, b) {
  return a === b;
}

console.log(foo(5, 5));
console.log(bar(5, 5));