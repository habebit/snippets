// Habebit
// Topic: try catch

function getUsernameFromDB() {
  throw 'error occurred';
}

try {
  getUsernameFromDB();
} catch (error) {
  console.error(error);
}

console.log('will be printed');