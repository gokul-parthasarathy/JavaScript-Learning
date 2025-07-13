const name = 'Gokul';
let age = 21;
const developer = true;
console.log(name);
console.log(age);
console.log(developer);

// Data Matches
const x = 10;
const y = '10';
console.log(x == y); // true, because it performs type coercion
console.log(x === y); // false, because it checks both value and type

// Reverse Logic
let a = true;
let b = false;
console.log('a -----> ' + a); // Output: true
console.log('b -----> ' + b); // Output: false
let Result_with_and_operater = a && b; // false, because both must be true
console.log('a && b -----> ' + Result_with_and_operater); // Output: false
let Result_with_or_operater = a || b; // true, because at least one is true
console.log('a || b -----> ' + Result_with_or_operater); // Output: true
let Result_with_not_operater = !a; // false, because it negates the true value
console.log('!a -----> ' + Result_with_not_operater); // Output: false
let result_with_adding_operater = a + b + a; // 1 + 0 + 1 = 2, because true is treated as 1 and false as 0
console.log('a + b + a -----> ' + result_with_adding_operater); // Output: 2