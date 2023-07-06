// Functions
// you don't need to add semicolon at the end of a function
function greet(fname, lname = "Wang") {
    console.log("hello " + fname + " " + lname +  ", how are you?");
}
let fname = 'kyle'; 
// arguments are the actual values supplied to the parameter
// parameters are the what declared is declared in the function header or function signature
greet(fname);
greet("John", "Hopkins");

// Function with return values
function square(number) {
    return number * number;
}
let number = square(2);
console.log(number)
// or
console.log(square(2))


// Factory function
function createCircle(radius, location) {
    const circle = {
        radius: radius, 
        location: location,
        isVisible: true,
        draw: function() {
            console.log('draw');
        }
    };
    return circle;
}

let circle1 = createCircle(3, {x:1, y:4})
console.log("Circle1 radius:", circle1.radius);
console.log("Circle1 location:", circle1.location);
circle1.draw();

function createCircle(radius, location) {
    return {
        radius, // if the key and value are the same, we can make our code shorter by removing the value and simply adding the key
        location: location,
        isVisible: true,
        draw() { // the same applies to functions, we can take out the key and value pair
            console.log('draw');
        }
    };
}

let circle2 = createCircle(1, {x:2, y:6});
console.log("Circle2 radius:", circle2.radius);
console.log("Circle2 location:", circle2.location);

// Constructor Function
function Circle(radius, location) {
    this.radius = radius;
    this.location = location;
    this.draw = function() {
        console.log('draw');
    }
    // return this; // this is basically what happen but javascript return this automatically, 
                    // so we don't have to return this explicitly
}

const circle = new Circle(1, {x:5, y:5}); 
const x = {}; // the keyword new create a javascript empty object like this


// Difference between factory and constructor function 
const myCircle = createCircle(3, {x:1, y:2}); // factory function
const myCircle2 = new Circle(7, {x:3, y:5}); // constructor function
