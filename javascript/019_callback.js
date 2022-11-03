// Habebit
// Topic: callback function

function plus(x, y) { return x + y; }
function minus(x, y) { return x - y; }

function calculator(x, y, callback) {
  const result = callback(x, y);
  console.log('result: ' + result);
}

calculator(5, 7, plus);

calculator(5, 7, (x, y) => {
  return x**y;
});