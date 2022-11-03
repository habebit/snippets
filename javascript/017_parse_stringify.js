// Habebit
// Topic: JSON parse and stringify

const a = JSON.stringify(
  { name: 'John', age: 28 } // object
);
const b = JSON.parse(
  '{ "name": "Jane", "age": 26 }' // string
);

console.log(typeof a, a);
console.log(typeof b, b);