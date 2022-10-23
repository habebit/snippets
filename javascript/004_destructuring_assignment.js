// JavaScript
// Topic: Destructuring assignment (array)

// TRY TO AVOID ❌
function foo(a) {
  const x = a[0];
  const y = a[1];
  return x + y;
}

// BETTER ✅
function bar(a) {
  const [x, y]= a;
  return x + y;
}

const param = [5, 3];
console.log(foo(param));
console.log(bar(param));