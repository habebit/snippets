// Habebit
// Topic: for in... vs for of...

const alphabet = ['a', 'b', 'c'];

console.log('for in...');
for (let x in alphabet) {
  console.log(x);
}

console.log('for of...');
for (let x of alphabet) {
  console.log(x);
}