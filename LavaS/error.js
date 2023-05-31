// Throw, and Try...Catch...Finally
// 'try' statement defined a code block to run (to try)
// 'catch' statement defines a code block to handle any error
// 'finally' statement defines a code block to run regardless 
// of the result
// 'throw' statement defines a custom error

let num = [1,2,3,4,5];
// let index = 6;
let index = 3;

try {
    console.log(num[1]);
    if (index > num.length) {
        throw "Index out of range";
    }
} catch(err) {
    console.log("There is an error:");
    console.log(err);
} finally {
    // This block of code will be exectued regardless of the try/catch 
    // result
    console.log("PROGRAM ENDS");
}


// Javascript built in error object
// Error object contains two useful properties:
// - name: sets or returns an error name
// - property: sets or returns an error message

// Ex:
// EvalError: an error has occured in the eval() function
// RangeError: a number 'out of range' has occurred
// ReferenceError: an illegal reference has occurred
// SyntaxError: a syntax error has occurred
// TypeError: a type error has occurred
// URIError: an error in encodeURI() has occurred
