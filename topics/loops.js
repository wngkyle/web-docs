// Loops
// for 
// while
// do...while
// for...in
// for...of

// 'for' statement creates a loop with 3 optional expressions
let num = []
for (let i = 0; i < 8; i++) {
    num.push(i);
    console.log(i);
}
// The below for loop is the same as above
// You can initiate many values in expression 1, and you can omit expression 1 too
// All 3 expressions are optional
let i = 0;
for (; i < 8; i++) {
    console.log(i);
}

// 'for in' statement loops through the properties of an object
person = {fname: "Lebron", lname: "James", age: 37};
// Looping through an object
for (let val in person) {
    console.log(person[val]);
}
// Looping through an array
for (let val in num) {
    console.log(num[val]); // use [] to access element, or else only prints index number
}

// .forEach() calls a function (a callback function) once for each array element
num = [45, 2, 59, 34, 7, 5];
let txt = '';
function myFunction(value, index, array) {
    txt += value + ' ';
}
num.forEach(myFunction);
console.log(txt);

// 'for of' statement loops through the values of an iterable object
let text = '';
for (let val of num) {
    text += val + " ";
}
console.log(text);
let str = "Javascript";
for (let val of str) {
    process.stdout.write(val);
}
console.log("!");

// 'while' loop
let count = 0;
while (count < 10) {
    console.log(count);
    count++;
}


// 'do...while' loop
// Execute the block once before checking if the condition is true
do {
    console.log(count);
    count++;
} while(count < 10)

// 'break' statement used to jump out of a loop
// 'continue' statement used to break one iteration and continues the next iteration 
// Labels in javascript
const cars = ["BMW", "Volvo", "Saab", "Ford"];
list: {
  text += cars[0];
  text += cars[1];
  break list;
  text += cars[2];
  text += cars[3];
}
console.log(text);
