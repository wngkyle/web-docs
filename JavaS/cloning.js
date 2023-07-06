// Cloning an object
const shape = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

const anotherShape = {};

// Method 1 of cloning
for (let key in shape)
    anotherShape[key] = shape[key];

// The loop above and the two lines of code below works the same way
// They both clone the object

// Method 2 of cloning
anotherShape['radius'] = shape['radius'];
anotherShape['draw'] = shape['draw'];

// Below should produce the same result
console.log('shape:', shape);
console.log( 'Method 2:', anotherShape);

// Method 3 of cloning
// Object.assign() statis method that copies all enumerable own properties from one or more
// source objects to a target object
// Returns the modified target object
// Object.assign(target, ...sources)
// Target - target object, what to apply the sources' properties to (can be empty object)
// Sources - objects containing the properties you want to apply
// Ex: const returnedTarget = Object.assign(target, source1, source2);
// Ex: const returnedTarget = Object.assign({}, source1);
const anotherAnotherShape = Object.assign({}, shape);
console.log( 'Method 3:', anotherAnotherShape);

// Method 4 of cloning
const anotherAnotherAnotherShape = {...shape};
console.log( 'Method 4:', anotherAnotherAnotherShape);
// Using the spread (...) operator
// It takes all the properties and functions and put it in the empty bracket list
// into the empty object

// Official doc on spread syntax(...)
// Allows an iterable, such as an array or string, to be 
// expanded in places where zero or more arguments (for 
// function calls) or elements (for array literals) are 
// expected
// In object literal, the spread syntax enumerates the 
// properties of an object and adds the key-value pairs 
// to the object being created

// Ex1
function sum(x, y, z) {
    return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers));
console.log(sum.apply(null, numbers));
// Should provide the same output

// Ex2
const array = [1, 2, 3];
const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }

// Ex3
function myFunction(v, w, x, y, z) {}
const args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);

// Ex4
const dateFields = [1970, 0, 1]; // 1 Jan 1970
const d = new Date(...dateFields);

// Ex5 
const parts = ["shoulders", "knees"];
const lyrics = ["head", ...parts, "and", "toes"];
// ["head", "shoulders", "knees", "and", "toes"]


// Ex6
const arr = [1, 2, 3];
const arr2 = [...arr]; // like arr.slice()
arr2.push(4);
// arr2 becomes [1, 2, 3, 4]
// arr remains unaffected