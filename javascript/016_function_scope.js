// Habebit
// Topic: function scope
// (?): only available in function scope

function greet() {
  // var, let and const all have...
  // ... function scope
  var greeting = 'Hello';
  console.log(greeting);
}

console.log(greeting);

greet();