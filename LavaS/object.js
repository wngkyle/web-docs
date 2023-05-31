const person = {
    firstName: "Jimmy",
    lastName : "Butler",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    },
    validID() {
        if (this.id > 1000) {
            return true
        }
    }
  };

// It is common practice to declare object with the 'const' keyword

// Accessing properties of an object
console.log(person.firstName);
console.log(person['firstName']);

// Accessing methods
// If you access a method without the () parentheses, it will 
// return function definition
console.log(person.validID());