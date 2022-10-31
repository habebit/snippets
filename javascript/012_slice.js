// Habebit
// Topic: slice(start, end) 
// start included, end excluded

const x = [1,2,3,4,5,6];

// from index 0 to 3 (3 not included)
console.log('->: ' + x.slice(0, 3));

// from index 3 to end
console.log('->: ' + x.slice(3));

// last two elements
console.log('->: ' + x.slice(-2));