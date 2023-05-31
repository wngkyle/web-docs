// Arrow Function
// Allow us to write shorter function 
let myFunction = (a,b) => a*b;

// Without arrow
let hello = function() {
    return "Hello World";
}
console.log(hello)

// With arrow
hello = () => {
    return "Hello World";
}
// If the function has only one statement, and the statement 
// returns a value, you can remove the brackets and the return
// keyword
hello = () => "Hello World";

// Arrow function with parameters
hello = (fname, lname) => "Hello " + fname + lname;
console.log(hello("Tina", " Wang"));

// Arrow function with parameters but without parentheses
hello = val => "Hello " + val;
console.log(hello('Tina'));

// Keyword 'this' is different in arrow function
// In regular functions, 'this' represented the object that called the function,
// which could be the window, the document, a button or whatever
// In arrow functions, 'this' always represents the object defined the arrow function 




