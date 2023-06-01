// Shortcut : imrc
import React, { Component } from "react";

// Shortcut : cc
class Counter extends Component {
  render() {
    // The parentheses after return is necessary
    // The empty tag <> below is the same as using <React.Fragment>
    // In doing so, you don't have to wrap the element around usng <div>
    return (
      <>
        <h1>Hello World!</h1>
        <button>Increment</button>
      </> 
    );
  } 
}

export default Counter;
// You can export the component here or add "export default" to the front of the class signature
