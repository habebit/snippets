// JavaScript
// Topic: Destructuring assignment (array)

// TRY TO AVOID ❌
function foo(a) {
  const x = a.x;
  const y = a.y;
  return x + y;
}

// BETTER ✅
function bar(a) {
  const { x, y } = a;
  return x + y;
}

const param = { x: 5, y: 3 };
console.log(foo(param));
console.log(bar(param));