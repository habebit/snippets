// Habebit
// Topic: Property Accessors

const person = { 
  age: '25',
  name: 'John Doe'
};

// 1️⃣ dot notation 
person.name = 'Jane Doe';

// 2️⃣ string notation 
person['age'] = 28;

console.log(person.name);
console.log(person.age);