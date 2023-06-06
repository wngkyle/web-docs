// Shortcut : imrc
import React, { Component } from "react";

// Shortcut : cc
class Counter extends Component {
  // 'state' object contain every property that this component needs
  state = { 
    count : 0,
  };  
  render() {
    // The parentheses after return is necessary
    // The empty tag <> below is the same as using <React.Fragment>
    // In doing so, you don't have to wrap the element around usng <div>
    return (
      <>
        <span>{this.state.count}</span>
        <button>Increment</button>
      </> 
    );
  } 
}

export default Counter;
// You can export the component here or add "export default" to the front of the class signature
