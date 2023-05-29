// Getters and Setters next
const me = {
    firstName: 'Kyle',
    lastName: 'Wang',
    get fullName() { // getter function, add keyword get
        return `${me.firstName} ${me.lastName}`;
    },
    set fullName(value) { // setter function, add keyword set
        const parts = value.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }

}

// The below implementation produce the same result
console.log(me.firstName + " " + me.lastName);
console.log(`${me.firstName} ${me.lastName}`);

// getter for accessing property in an object
// setter for setting property in an object

me.fullName = 'Wei-Kai Wang';
console.log(me);