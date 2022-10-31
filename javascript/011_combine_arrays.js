// Habebit
// Topic: combine arrays with spread

// combine two arrays
const x = [1,2,3];
const y = [4,5,6];

// 1️⃣ concat
const res1 = x.concat(y);
console.log('concat: ' + res1);

// 2️⃣ spread
const res2 = [...x, ...y];
console.log('spread: ' + res2);