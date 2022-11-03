// Habebit
// Topic: recursion

function countdown(x) {
  console.log(x);
  if (x === 0) { return 'JavaScript💛'; }
  return countdown(x-1);
}

console.log(countdown(5));