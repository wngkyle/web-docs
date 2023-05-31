// Make sure prompt-sync is installed
// If "Error: Cannot find module 'prompt-sync'" is shown, run the following command in terminal
// $ npm install prompt-sync
const prompt = require("prompt-sync")();

var fname = prompt("Enter your first name: ");
var lname = prompt("Enter your last name: ");

console.log("Your Full Name is", fname, lname);


// Using keyword let for variables
let firstWord = "kkkk";
console.log(firstWord);

// use keyword const for constants or values you don't want to change
const annualRate = 0.3; // cannot modify the value later on
let interestRate = 0.4;
interestRate = 1;
console.log(interestRate);
// annualRate = 0.4; // this line will result in error since annual rate is declared as constant

// undefined variables
let firstName; // undefined
let lastName = undefined; // undefined
let middleName = null; // we use null in situations where we want to explicitly clear the value of the variable
// Null means empty in javascript, it is a primitive type
// Null is an object
// Undefined means has been declared, but has not been assigned a value yet

// Dynamic typing in javascript
let num1 = 5;
let float1 = 3.4; // all numbers, integers and doubles, are type number
let deter = true;
console.log(typeof(firstWord)) // type string
console.log(typeof(num1)) // type number
console.log(typeof(float1)) // type number
console.log(typeof(deter)) // type boolean
console.log(typeof(lastName)) // type undefined
console.log(typeof(middleName)) // type object

// Primitive types in javascript:
// - string
// - number
// - boolean
// - undefined
// - null

// Object
// {} is object literals
// In the curly braces, we add key and values pair
let person = {
    firstName: "Mosh",
    age: 0
}; 
console.log("person:" + person.age);

// changing the name of the person
// Dot notation 
// Bracket notation
person.name = "John"; // doing this automatically adds a new attribute to the person object
                      // b/c 'name' is an attribute that has not yet been declared
console.log(person.name);
person['age'] = 20;
console.log(person.age);
console.log(person);


