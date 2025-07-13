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


// variable Scope and types


// let 
let x1 = 10;
if (true) {
    let x1 = 20; // This x1 is different from the outer x1
    console.log('Inside block, x1: ' + x1); // Output: 20
    let x2 = 25; // This x2 is block-scoped
    console.log('Inside block, x2: ' + x2); // Output: 25
}
x1 = 30; // This modifies the outer x1
console.log('Outside block, x1: ' + x1); // Output: 30
// let x1 = 40; // This will cause an error because x1 is already declared in the outer scope
// console.log('Outside block, x2: ' + x2); // Output: undefined, because x2 is not accessible outside the block

// var 
var x3 = 10;
if (true) {
    var x3 = 20; // This x2 is the same as the outer x3
    console.log('Inside block, x3: ' + x3); // Output: 20
    var x4 = 25; // This redeclares x4 in the same scope
    console.log('Inside block, x4: ' + x4); // Output: 25
}
x3 = 30; // This modifies the x2
console.log('Outside block, x3: ' + x3); // Output: 30
console.log('Outside block, x4: ' + x4); // Output: 25, because x3 is hoisted and accessible outside the block
// var x2 = 40; // This will not cause an error, but it is not recommended to redeclare variables
var x3 = 40; // This will not cause an error, but it is not recommended to redeclare variables
console.log('Outside block, x3: ' + x3); // Output: 40