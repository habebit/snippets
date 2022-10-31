// Habebit
// Topic: spread syntax (array)

function add(x, y, z) { 
  return x + y + z; 
}

const data = [5, 10, 20];

// 1️⃣ access each element individual
const x = add(data[0], data[1], data[2]);

// 2️⃣ spread your iterable
const y = add(...data);

console.log('x: ' + x);
console.log('y: ' + y);