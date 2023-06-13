import "./App.css";
import React, { Component } from 'react';
import Counters from "./components/Counters";
import NavBar from "./components/NavBar";

// Whenever you want to keep data in sync betwee ntwo components without parent-child relationship,
// you will need to lift the state (data) up
// You move the state and all the methods and functions that modify the state

class App extends Component {
  constructor() {
    super();
    console.log("App - Constructor");
  }

  componentDidMount() {
    // Ajax call 
    console.log("App - Mounted");
  }

  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterID) => {
    console.log("Delete Event Handler Called", counterID);
    const counters = this.state.counters.filter((c) => c.id !== counterID);
    // Using the .filter() method get all the counters except the one with the given id
    this.setState({ counters: counters });
    // Use .setState() to update the state
    // Since the key and value are the same we can simplify the above line of code to this:
    // this.setState({counters});
  };
  // The component that owns a piece of the state, should be the one modifying it

  handleReset = () => {
    console.log("Reset Event Handler Called");
    // const counters = this.state.counters.map((c) => {
    //   c.value = 0;
    //   return c;
    // });
    const counters = [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ];
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    console.log("Increment Event Handler Called");
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    // About constants :
    // It does not mean the value it holds is immutable—just that the variable identifier cannot be reassigned.
    // If a constant is an object or array its properties or items can be updated or removed
    // For instance, in the case where the content is an object, this means the object's contents (e.g., its
    // properties) can be altered
    counters[index] = { ...counter };
    counters[index].value++; // this will directly modify the state, WE CANT DO THAT
    this.setState({ counters });
    // console.log(this.state.counters[index]);
  };

  render() {
    console.log("App - Rendered");

    return (
      <>
        <NavBar totalElement={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </>
    );
  }
}

export default App;

// Commonly-used Lifecycle Hooks:
// 1. Mounting Phase : happens when an instance of a component is created and circuit into the DOM
// - constructor()
// - render()
// - componentDidMount()
// 2. Update Phase : happens when the state or props of a component gets changed
// - render()
// - componentDidUpdate()
// 3. Unmounting Phase : happens when a component is removed from the DOM
// - componentWillUnmount()
