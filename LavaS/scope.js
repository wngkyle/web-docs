// Scope
const message1 = 'hola';
{
    const message2 = 'hi'; // defined inside a code block, will not be detected outside
}
console.log(message1);
// console.log(message2); // this will creates a scope issue where it results
                          // in a reference error that says message2 is not defined

// The same concept applied to if-else statement, loop, and functions
// Variables outside of the code block will not be found

const color = 'red';

function start() {
    const message = 'hi';
    console.log(color); // in this case, the variable is accessible
}
function stop() {
    const message = 'bye';
    const color = 'blue'; 
    console.log(color); // this will print out blue instead of red
}

// ***** IMPORTANT ********
// Local variables or constants take precedance over global variables 
// or constants
