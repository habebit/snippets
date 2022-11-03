// JavaScript
// Topic: or operator at initialization

function getUsername() {
  return 'Benedikt';
}

// TRY TO AVOID ❌
let usernameA = getUsername();
if (!usernameA) {
  usernameA = 'John';
}

// BETTER ✅
const usernameB = getUsername() || 'John';
