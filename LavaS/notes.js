// ***** IMPORTANT ********
// Value Types and Reference types
// Values types:
// - number
// - string
// - boolean
// - symbol
// - undefined
// - null
// Reference types:
// - object
// - function 
// - array

// value doesn't change
let e1 = 10;
let e2 = e1;
e1 = 20;
console.log(e1);
console.log(e2);

// value changes
let e3 = {value: 10};
let e4 = e3;
e3.value = 20;
console.log(e3);
console.log(e4);

// ***** IMPORTANT ********
// Conclusion:
// Primitives are copied by their value
// Objects are copied by their reference

let e5 = 10;
let e6 = {value: 10};

// e5 in the function will simply go out of scope once exit the function
function increase(e5) {
    e5++; // primitives are copied by value
}
function increase(e6) {
    e6.value++; // primitives are copied by value
}

// Will not be incremented
increase(e5);
console.log(e5);
// Will be incremented
increase(e6);
console.log(e6);
