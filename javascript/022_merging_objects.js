// Habebit
// Topic: merging objects

const x = {
  name: 'Sherlock Holmes',
};

const y = {
  city: 'Baker Street 221B'
};

const person = {...x, ...y};
console.log(person);