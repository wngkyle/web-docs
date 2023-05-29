class Cars {
    constructor(brand, year) {
        this._brand = brand;
        this._year = year;
    }
    age() {
        const date = new Date();
        return date.getFullYear() - this._year;
    }
    show() {
        return "The car brand is " + this._brand;
    }
    test() {
        console.log("CARS CLASS");
    }
}

let myCar = new Cars("McLaren", "GT");

// A javascript class is not an object, it is a template for objects
// Use the 'class' keyword to create a class

// Constructor method
// The constructor method is called automatically when a new object is 
// created
// - has to have the exact name 'constructor'
// - executed automatically when a new object is created
// - used to initialized object properties

// Class methods
// Created with the same syntax as object methods

// Class Inheritance
// Use the 'extends' keyword to create a class inheritance
// A class created with a class inheritance inherits all the methods 
// from another class
// Inheritance is useful for code reusability: reuse properties and
// methods of existing class when you create a new class

class Model extends Cars {
    constructor(brand, model) {
        super(brand);
        this._model = model;
    }
    present() {
        return this.show() + ", model is " + this.model;
    }
    get brand() {
        return this.brand;
    }
    set brand(brand) {
        this._brand = brand;
    }
    get model() {
        return this._model;
    }
    set model(model) {
        this._model = model;
    }
    test() { 
        // Overriding methods, same test() function is declared in 
        // parent class
        console.log("MODEL CLASS");
    }
}

let myModel = new Model("Mercedes", "C300");
console.log(myModel.present());

// 'super()' method refers to the parent class
// By calling the 'super()' method in the constructor method, we call 
// the parent's constructor method and gets access to the parent's 
// properties and methods

// Use getter and setter methods to access and modify properties
// Even if the getter and setter are methods, you do not use 
// parentheses when you want to get the property value

myModel.carBrand = "BMW";
myModel.carModel = "X5";
console.log(myModel.present());

myCar.test(); // Calling the test() function in Cars since myCar is an 
              // instance of Cars
myModel.test(); // Calls the test() function in Model since myModel is 
                // an instance of class Model 

