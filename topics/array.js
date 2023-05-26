// Arrays
// Arrays in javascript are accessed using index
// Arrays are also dynamic, you can expand their length
// The type of object that can be stored in the array is also dynamic
// You can store different types of object in javascript array
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
selectedColors[5] = 8;
console.log(selectedColors.length);
console.log(selectedColors)

// Common practice in javascript to declare arrays with const
const cars = [];
cars[0] = "BMW";
cars[1] = "HONDA";

// You can also use keyword 'new' to declare array but it's not necessary 
// It does the same thing
const cars2 = new Array("BMW", "Volvo");

// toString() converts an array into string
console.log(cars2.toString());

// Arrays are objects
console.log(typeof(cars2));

// The elements in an javascript array can be other objects

// Array methods
// .length and .sort()
// Since length is a property of array, we don't need ()
console.log(cars.length);
console.log(cars.sort());

// Adding elements to an array
// .push()
// NOTE: adding high indexes can create undefined holes in array
console.log(cars);
cars.push("Mercedes");
// cars[cars.length] = "Mercedes"; // does the same thing
console.log(cars);

// Difference between arrays and objects:
// Arrays use numbered indexes
// Objects use named indexes
// Use arrays when you want the element names to be number, use objects
// when you want the element names to be string

// Distinguishing arrays and objects
console.log(Array.isArray(cars));
console.log(cars instanceof Array);

// .join() behaves like .toString(), difference is you can specify the seperator
console.log(cars.join('-'));

// .pop() removes and return the last element in the array
let lastCar = cars.pop();

cars.push("Aston Martin");
cars.push("McLaren");
cars.push("Alfa Romeo");
cars.push("Porsche");
cars.push("Renault");
cars.push("Ford");
// .shift() removes and return the first element and shift all other elements to a lower index
let firstCar = cars.shift();
console.log(cars);

// .unshift() adds a new element to an array (at the beginning), and "unshifts" older elements
cars.unshift(firstCar);
console.log(cars);

// keyword 'delete' 
// NOTE: using 'delete' leaves undefined holes in the array
delete cars[6];
console.log(cars);

// .concat() this creates a new array by merging existing arrays
// NOTE: this array does not modify existing array, it returns a new array.
// It can also take strings as arguments, and can also take multiple arrays 
// as arguments
let cars3 = cars.concat(cars2);
console.log(cars3);

// .flat() flattens an array, reduces dimensions by creating a new array
let example = [[1,2],[3,4],[5,6]];
let newExample = example.flat();
console.log(example);
console.log(newExample);

// .splice() used to modify the contents of an array by removing the existing elements and/or by adding new elements
// .splice(index, remove_count, item_list)
// First parameter defined where to splice in
// Second parameter defined how many element to remove
// Third and rest of the parameters defined new items to add
newExample.splice(2,1,"Ford", "BMW");
console.log(newExample);

// Using .splice() to remove element by leaving the third parameter empty
newExample.splice(0,1); // remove the first element in the array
console.log(newExample);

// .slice() for slicing
// .slice(begin, end)
// First parameter is the begin index
// Second parameter is the end index
// NOTE: last index is not included, this method creates a new array
let slicedExample = newExample.slice(1,3);
console.log(slicedExample);

// .sort() sorts an array alphabetically
console.log(cars);
cars.sort();
console.log(cars);

// .reverse() reverses the elements in an array
cars.reverse();
console.log(cars);

newExample.sort();
console.log(newExample);



