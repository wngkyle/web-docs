// Variables can be declared and initialized without the var or 
// let keywords. However, a value must be assigned to a variable 
// declared without the var keyword.

// The variables declared without the var keyword become global 
// variables, irrespective of where they are declared.

// let / var / const
function start() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
        if (true) {
            var colorR = 'red'; // changing var to let will result in an error
        }
    }
    console.log(i); // This will result in an error if 'let' is used
                    // Will not be an error if 'var' is used
    console.log(colorR);
}
start();

// ***** IMPORTANT ********
// When you declare a variable using the keyword var, its scope is not limited
// to the block in which it is defined. It is only limited to the function in 
// which it is defined


var colorRED = 'red'; // window.colorRED => defined
let age = 30; // window.age => undefined

// When declare a variable using 'var' outside of a function, you create a 
// global variable and attach that global variable to the window object in
// browser 

// If you use 'let' to declare a variable, that variable will not attach to
// the window object

// There is only one instance of window object
// Variables can be easily overwrite by some other third-party website
// when attach to the window object


function sayHi() { // this is attached to the window object
    console.log('hi');
}
// there is a way to declare a function without attaching it to the window 
// object

// Conclusion:
// Avoid using the 'var' keyword