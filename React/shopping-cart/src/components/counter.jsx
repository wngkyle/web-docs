// Shortcut : imrc
import React, { Component } from "react";

// Shortcut : cc
class Counter extends Component {
  // 'state' object contain every property that this component needs
  state = { 
    count : 0,
    imgUrl : "https://picsum.photos/200"
  };  
  render() {
    // The parentheses after return is necessary
    // The empty tag <> below is the same as using <React.Fragment>
    // In doing so, you don't have to wrap the element around usng <div>
    return (
      <>
        <img src={this.state.imgUrl}/>
        <span className="badge badge-primary m-2">{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </> 
    );
  } 

  formatCount() {
    // The below line of code is object destructuring
    // It facilitates the process of retreiving the value of count
    // So we don't have to use 'this.state.count', we can just use 'count'
    const { count } = this.state;
    // Instead of just returning "Zero" when count = 0, you can also return '<h1>Zero</h1>
    return count === 0 ? "Zero" : count;
  }

}

export default Counter;
// You can export the component here or add "export default" to the front of the class signature
