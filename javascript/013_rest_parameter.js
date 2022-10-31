// Habebit
// Topic: ... rest parameter

function print(a, b, ...rest) {
  console.log('a: ', a);
  console.log('b: ', b);
  console.log('rest: ', rest);
}

print('1', '2');
print('1', '2', '3', '4', [1,2,3]);