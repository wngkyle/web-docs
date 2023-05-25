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
const anotherAnotherShape = Object.assign({}, shape);
console.log( 'Method 3:', anotherAnotherShape);

//Syntax: Object.assign(target, ...sources)
// You can put multiple objects in the source
// Target can be an empty object 
// Ex: const returnedTarget = Object.assign(target, source1, source2);
// Ex: const returnedTarget = Object.assign({}, source1);

// Method 4 of cloning
const anotherAnotherAnotherShape = {...shape};
console.log( 'Method 4:', anotherAnotherAnotherShape);
// Using the spread (...) operator
// It takes all the properties and functions and put it in the empty bracket list
// into the empty object